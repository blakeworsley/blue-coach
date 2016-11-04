import React, { PropTypes } from 'react';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import Redirect from 'react-router/Redirect';
import Router from 'react-router/BrowserRouter';

import authenticate from './components/Authentication';
import Dashboard from './components/Dashboard';
import MatchWhenAuthorized from './components/MatchWhenAuthorized';
import Login from './components/Login';

const App = () => (
  <Router>
    {({ router }) => (
      <div>
        {authenticate.isAuthenticated ? (
          <p>
            Welcome! {' '}
            <button onClick={() => {
              authenticate.signout(() => {
                router.transitionTo('/')
              })
            }}>Sign out</button>
          </p>
        ) : (
          <p>You are not logged in.</p>
        )}

        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>

        <Match pattern="/public" component={Public}/>
        <Match pattern="/login" component={Login}/>
        <MatchWhenAuthorized pattern="/protected" component={Dashboard}/>
      </div>
    )}
  </Router>
)

const Public = () => <h3>Public</h3>


export default App

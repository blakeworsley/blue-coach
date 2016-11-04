import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import App from './App';
import authenticate from './components/Authentication';
import Dashboard from './components/Dashboard';
import MatchWhenAuthorized from './components/MatchWhenAuthorized';
import Login from './components/Login';


import './index.css';

const Root = () => {
  return (
    <BrowserRouter history={history}>
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
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>

          <Match pattern="/public" component={Public}/>
          <Match pattern="/login" component={Login}/>
          <MatchWhenAuthorized pattern="/dashboard" component={Dashboard}/>
        </div>
      )}
    </BrowserRouter>
  )
}

const Public = () => <h3>Public</h3>

render(<Root />, document.querySelector("#root"))

export default Root;









// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
// import App from './App';
//
// import './index.css';
//
// const Root = () => {
//   return (
//     <BrowserRouter history={history}>
//       <section>
//         <Match exactly pattern="/" component={App} />
//       </section>
//     </BrowserRouter>
//   )
// }
//
// render(<Root />, document.querySelector("#root"))
//
// export default Root;

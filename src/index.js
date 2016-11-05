import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Athlete from './components/Athlete';
import Athletes from './components/Athletes';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';

import * as actions from './actions/authenticate';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <section>
        <Navigation />
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/dashboard" component={Dashboard} />
        <Match exactly pattern="/login" component={Login} />
        <Match exactly pattern="/register" component={Register} />
        <Match exactly pattern="/athletes" component={Athletes} />
        <Match pattern="/dashboard/:athlete" component={Athlete} />
        <Miss component={NoMatch} />
      </section>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(actions.startListeningToAuth());

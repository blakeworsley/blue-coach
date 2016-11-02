import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Athlete from './components/Athlete';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import './index.css';


const Root = () => {
  return (
    <BrowserRouter history={history}>
      <section>
        <Navigation />
        <Match exactly pattern="/" component={App}/>
        <Match pattern="/login" component={Login} />
        <Match pattern="/register" component={Register} />
        <Match pattern="/dashboard" component={Dashboard} />
        <Match pattern="/athlete" component={Athlete} />
        <Miss component={NoMatch} />
      </section>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector("#root"))

export default Root;

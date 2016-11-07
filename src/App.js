import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';

import * as actions from './actions/authenticate';

class App extends Component {
  render() {
    if (status === 'LOGGED_IN') {
      return (
        <Redirect to={{ pathname: '/dashboard'}}/>
      );
    } else {
      return (
        <section>
          <h1>Blue</h1>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </section>
      );
    }
  }
}


const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

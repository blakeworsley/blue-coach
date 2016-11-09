import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';

import * as actions from './actions/authenticate';

class App extends Component {
  render() {
    const { status } = this.props;
    if (status === 'LOGGED_IN') {
      return (
        <section>
          <Redirect to='/dashboard' />
        </section>
      );
    } else {
      return (
        <section className="starting-screen">
          <img src="./img/wave1.svg" className="wave1"
          role="presentation"
          />
          <img src="./img/wave2.svg" className="wave2"
          role="presentation"
          />
          <h1 className="logo">blue</h1>
          <Link to="/login"><button className="button-primary">Login</button></Link>
          <Link to="/register"><button className="button-primary">Register</button></Link>
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

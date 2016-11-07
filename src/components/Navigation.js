import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/authenticate';

export class Navigation extends Component {
  render() {
    const { status, username, logOut } = this.props;
    if (status === 'LOGGED_IN') {
      return (
        <div id="auth-panel">
          <Link to="/">Home </Link>
          <Link to="/dashboard">Dashboard </Link>
          <p>Logged in as <strong>{username}</strong></p>
          <button onClick={e => logOut()}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/">Home </Link>
          <Link to="/dashboard">Dashboard </Link>
          <Link to="/login">Login </Link>
          <Link to="/register">Register </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

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
        <header className="auth-header">
          <h1 className="logo-small">blue</h1>
          <nav className="auth-header-nav">
            <p><strong>{username}</strong></p>
            <button className="button-secondary"
              onClick={e => logOut()}>
              Log Out
            </button>
          </nav>
        </header>
      );
    } else {
      return (
        <header className="auth-header">
          <Link to="/login">Login </Link>
          <Link to="/register">Register </Link>
        </header>
      );
    }
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

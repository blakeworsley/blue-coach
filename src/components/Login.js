import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';

import * as actions from '../actions/authenticate';

class Login extends Component {
  render() {
    const { status, logIn } = this.props;
    let email;
    let password;

    if (status === 'LOGGED_IN') {
      return (
        <Redirect to='/dashboard' />
      );
    } else {
      return (
          <form onSubmit={e => {
            e.preventDefault()
            logIn(email.value, password.value)
            email.value = ''
            password.value = ''
          }}
          className="login-form"
          >
            <h2>Email</h2>
            <input ref={node => { email = node }}
              placeholder='Email'
            />
            <h2>Password</h2>
            <input ref={node => { password = node }}
              placeholder='Password'
              type='password'
            />
            <button className="button-primary"
              disabled={(status === 'AWAITING_AUTH_RESPONSE')}
            >
              Log In
            </button>
            <Link to={"/register"}>
              <button className="button-primary">
                Register
              </button>
            </Link>
          </form>
      );
    }
  }
};

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

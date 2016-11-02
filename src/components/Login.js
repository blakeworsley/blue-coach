import React, { Component } from 'react';
import firebase from 'firebase';
import Register from './Register';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      emailAddress: '',
      password: '',
      register: false,
    };
  }

  login() {
  const {emailAddress, password} = this.state;
  firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {emailAddress, password, register} = this.state;
    if (register) {
      return( <Register /> )
    }
    else {
      return (
        <div>
          <div>
            <h2>Login</h2>
            <input value={emailAddress}
              onChange={(event) => this.setState({emailAddress: event.target.value})}
              placeholder='Email'
            />
            <input value={password}
              onChange={(event) => this.setState({password: event.target.value})}
              placeholder='Password'
              type='password'
            />
            <button onClick={() => this.login()}>Log In</button>
            <button onClick={() => this.setState({ register: true })}>Register</button>
          </div>
        </div>
      );
    }
  }
}

export default Login;

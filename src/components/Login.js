import React, { Component } from 'react';
import { Link } from 'react-router';
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
    })
    .then(this.context.router.transitionTo("/dashboard"));
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
            <Link to={"/register"}><button>Register</button></Link>
          </div>
        </div>
      );
    }
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;

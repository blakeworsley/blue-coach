import React, { Component } from 'react';
import Register from './Register';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      emailAddress: '',
      password: '',
      register: false,
    };
  }

  render() {
    if (this.state.register) {
      return( <Register /> )
    }
    else {
      return (
        <div>
          <div>
            <h2>SignIn</h2>
            <input placeholder='Email'/>
            <input placeholder='Password'/>

          <button onClick={() => this.setState({ register: true })}> Register </button>
          </div>
        </div>
      );
    }
  }
}

export default SignIn;

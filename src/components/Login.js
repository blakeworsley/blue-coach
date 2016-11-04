import React, { Component } from 'react';
import { Redirect, Link } from 'react-router';
import authenticate from './Authentication';
import firebase from '../firebase';


// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       emailAddress: '',
//       password: '',
//     };
//   }
//
//   login() {
//     const {emailAddress, password} = this.state;
//     firebase.auth().signInWithEmailAndPassword(emailAddress, password)
//     .catch((error) => {
//       console.log(error);
//     })
//     .then(this.context.router.transitionTo("/dashboard"));
//   }
//
//   render() {
//     const {emailAddress, password} = this.state;
//     return (
//       <div>
//         <div>
//           <h2>Login</h2>
//           <input value={emailAddress}
//             onChange={(event) => this.setState({emailAddress: event.target.value})}
//             placeholder='Email'
//           />
//           <input value={password}
//             onChange={(event) => this.setState({password: event.target.value})}
//             placeholder='Password'
//             type='password'
//           />
//           <button onClick={() => this.login()}>Log In</button>
//           <Link to={"/register"}><button>Register</button></Link>
//         </div>
//       </div>
//     );
//   }
// }
//
// Login.contextTypes = {
//   router: React.PropTypes.object
// }
//
// export default Login;
//



export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailAddress: '',
      password: '',
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
  }


  login() {
    const {emailAddress, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    .catch((error) => {
      console.log(error);
    })
    .then(authenticate.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    }));
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { redirectToReferrer, emailAddress, password } = this.state;

    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'}/>
        )}
        {from && (
          <section>
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
          </section>
        )}
        <button onClick={this.login}>Log in</button>
        <Link to={"/register"}><button>Register</button></Link>

      </div>
    )
  }
}

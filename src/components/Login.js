import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/authenticate';

export class Login extends Component {
  render() {
    const { status, username, logIn, logOut } = this.props;

    if (status === 'LOGGED_IN') {
      return (
        <div id="auth-panel">
          <p>Logged in as <strong>{username}</strong></p>
          <button onClick={e => logOut()}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div id="auth-panel">
          <p>You are not logged in.</p>
          <button
            disabled={(status === 'AWAITING_AUTH_RESPONSE')}
            onClick={e => logIn()}
          >Log In</button>
        </div>
      );
    }
  }
};

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);



// constructor() {
//   super();
//   this.state = {
//     emailAddress: '',
//     password: '',
//   };
// }
//
// login() {
//   const {emailAddress, password} = this.state;
//   firebase.auth().signInWithEmailAndPassword(emailAddress, password)
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(this.context.router.transitionTo("/dashboard"));
// }
//
// render() {
//   const {emailAddress, password} = this.state;
//   return (
//     <div>
//       <div>
//         <h2>Login</h2>
//         <input value={emailAddress}
//           onChange={(event) => this.setState({emailAddress: event.target.value})}
//           placeholder='Email'
//         />
//         <input value={password}
//           onChange={(event) => this.setState({password: event.target.value})}
//           placeholder='Password'
//           type='password'
//         />
//         <button onClick={() => this.login()}>Log In</button>
//         <Link to={"/register"}><button>Register</button></Link>
//       </div>
//     </div>
//   );
// }
// }
//
// Login.contextTypes = {
// router: React.PropTypes.object

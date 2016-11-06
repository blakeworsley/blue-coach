import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/authenticate';

export class Navigation extends Component {
  render() {
    const { status, username, logIn, logOut } = this.props;
    let email;
    let password;

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















// import React from 'react';
// import { Link } from 'react-router';
//
// const Navigation = () => {
//   return (
//     <section className='Navigation'>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/register">Register</Link></li>
//       </ul>
//     </section>
//   )
// }
//
// export default Navigation;

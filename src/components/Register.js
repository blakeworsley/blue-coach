import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      teamName: ''
    };
  }

  formatName(name) {
    const lowercaseName = name.trim().toLowerCase();
    return lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
  }

  handleNewUser() {
    const { firstName, lastName, emailAddress, password, teamName } = this.state;
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
    .catch((error) => {
      console.log(error);
      alert('All fields required. Make sure password is at least 6 characters.');
    })
    .then(() => {
      firebase.auth().currentUser.updateProfile({
        displayName: `${this.formatName(firstName)} ${this.formatName(lastName)}`
      });
    })
    .then(() => {
      firebase.database().ref('users').push({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
        type: 'coach'
      });
    })
    .then(() => {
      firebase.database().ref(`teams/${teamName.replace(/\s+/g, '-').toLowerCase()}/coaches/`).push({
        emailAddress: emailAddress,
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
      });
    });
  }

  render() {
    const { firstName, lastName, emailAddress, password, teamName } = this.state;
    return (
      <section className="register-form">
        <h2>First Name</h2>
        <input value={firstName}
          onChange={(event) => this.setState({firstName: event.target.value})}
          placeholder='First Name'
        />
        <h2>Last Name</h2>
        <input value={lastName}
          onChange={(event) => this.setState({lastName: event.target.value})}
          placeholder='Last Name'
        />
        <h2>Email Address</h2>
        <input value={emailAddress}
          onChange={(event) => this.setState({emailAddress: event.target.value})}
          placeholder='Email Address'
        />
        <h2>Password</h2>
        <input value={password}
          onChange={(event) => this.setState({password: event.target.value})}
          placeholder='Password'
          type='password'
          className="register-password"
        />
        <h2>Team</h2>
        <input value={teamName}
          onChange={(event) => this.setState({teamName: event.target.value})}
          placeholder='Team Name'
        />
        <button className="button-primary"
          onClick={() => {this.handleNewUser()}}
          disabled={(!firstName || !lastName || !emailAddress || (password.length <= 5) || !teamName)}
        >
          Register
        </button>
        <Link to={"/login"}>
          <button
            className="button-primary">
            Back
          </button>
        </Link>
      </section>
    );
  }
}

export default Register;

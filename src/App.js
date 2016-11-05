import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import { Link, Redirect } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  //
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged( (user) =>  {
  //     this.setState({user});
  //   });
  // }

  render() {
    const { user } = this.state;
    if(user){
      return (
        <Redirect to={{ pathname: '/dashboard'}}/>
      );
    } else {
      return (
        <section>
          <h1>Blue</h1>
          <Link to="/login"><button>Login</button></Link>
        </section>
      );
    }
  }
}

export default App;

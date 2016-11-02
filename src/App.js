import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( (user) =>  {
      this.setState({user});
    });
  }

  render() {
    const { user } = this.state;
    if(user){
      return (
        <Dashboard user={user}/>
      );
    } else {
      return (
        <Login />
      );
    }
  }
}

export default App;

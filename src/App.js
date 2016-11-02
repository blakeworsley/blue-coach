import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Login from './components/Login';
import Athlete from './components/Athlete';

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
    if(this.state.user){
      return (
        <Athlete />
      );
    } else {
      return (
        <Login />
      );
    }
  }
}

export default App;

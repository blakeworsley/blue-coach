import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
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
        <Authenticate />
      );
    }
  }
}

export default App;

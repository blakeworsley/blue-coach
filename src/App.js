import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import SignIn from './components/SignIn';
import CoachDashboard from './components/CoachDashboard';
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
        <SignIn />
      );
    }
  }
}

export default App;

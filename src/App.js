import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import Register from './components/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    // this.setState({user: 'Coach'});
  }

  render() {
    if(this.state.user){
      return (
        <SignIn />
      );
    } else {
      return (
        <Register />
      );
    }
  }
}

export default App;

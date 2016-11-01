import React, { Component } from 'react';
import firebase from './firebase';
import split from 'split-object';
import { map } from 'lodash';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      athletes: null
    };
  }

  componentWillMount() {
    const team = 'ssst';
    firebase.database().ref(`teams/${team}/athletes`).on('value', (snapshot) => {
      let athletes = snapshot.val();
      split(athletes).map(athlete => { Object.assign({ key: athlete.key }, athlete.value); });
      this.setState({athletes: athletes});
      console.log(athletes);
    });
  }


  render() {
    const renderAthletes = map(this.state.athletes, (athlete) => {
      return(
        <li key={athlete.firstName + athlete.lastName + athlete.teamName}>
          {athlete.firstName} {athlete.lastName}
        </li>
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>BlueCoach</h2>
        </div>
        <ul>{renderAthletes}</ul>
      </div>
    );
  }
}

export default App;

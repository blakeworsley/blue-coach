import React, { Component } from 'react';
import firebase from '../firebase';
import split from 'split-object';
import { map } from 'lodash';
import '../App.css';
import Athletes from './Athletes';

class Dashboard extends Component {
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
    });
  }

  


  render() {
    const renderAthletes = map(this.state.athletes, (athlete) => {
      console.log(athlete);
      return(
        <Athletes key={athlete.firstName + athlete.lastName + athlete.teamName}
          firstName={athlete.firstName}
          lastName={athlete.lastName}
          teamName={athlete.teamName}
          email={athlete.emailAddress}
        />
      )
    })
    return (
      <div>
        <h1>Coach Dashboard</h1>
        <ul>{renderAthletes}</ul>
        <button onClick={() => { firebase.auth().signOut() }}>Sign Out</button>
      </div>
    );
  }
}

export default Dashboard;

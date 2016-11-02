import React, { Component } from 'react';
import firebase from '../firebase';
import { map } from 'lodash';
import Athletes from './Athletes';

class Athlete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coach: {teamName: 'SSST'},
      // needs to come from props ^^^
      athlete: {firstName: 'Ross', lastName: 'Edfort'},
      // needs to come from props ^^^
    };
  }

  componentWillMount() {
    const team = `${this.state.coach.teamName}`;
    // from this.state.coach login // SSST
    const swimmerName = `${this.state.athlete.firstName.toLowerCase()}-${this.state.athlete.lastName.toLowerCase()}`;
    //from this.state.athlete // ross-edfort
    firebase.database().ref(`workouts/${team}/${swimmerName}`).on('value', (snapshot) => {
      console.log(snapshot.val());
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
        <h1>{this.state.athlete.firstName + ' ' + this.state.athlete.lastName}</h1>
        <p>Data about athlete goes here</p>
        {renderAthletes}
      </div>
    );
  }
}

export default Athlete;

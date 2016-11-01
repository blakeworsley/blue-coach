import React, { Component } from 'react';
import firebase from './firebase';
import split from 'split-object';
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
      split(athletes).map(athlete => { athletes = Object.assign({ key: athlete.key }, athlete.value); });
      this.setState({athletes: athletes});
      console.log(athletes);
    });
  }


  fetchAllTeamData() {
    const { athletes } = this.state;
    return(
      <li>
        {/* {athletes[0].firstName} {athletes[0].lastName} */}
      </li>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>BlueCoach</h2>
        </div>
        <ul>{(this.state.athletes) ? this.fetchAllTeamData() : <li>yo</li>}</ul>
      </div>
    );
  }
}

export default App;

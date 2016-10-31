import React, { Component } from 'react';
import firebase, { teamRef } from './firebase';
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
    this.reference.on('value', (snapshot) => {
      let athletes = snapshot.val();
      this.setState({athletes: athletes});
    });
  }

  get reference() {
    const team = 'team';
    return firebase.database().ref(`teams/0/${team}/athletes/`);
  }

  fetchAllTeamData() {
    const { athletes } = this.state
    return(
      <li>
        {athletes[0].firstName} {athletes[0].lastName}
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

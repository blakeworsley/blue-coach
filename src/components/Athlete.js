import React, { Component } from 'react';
import firebase from '../firebase';
import { map } from 'lodash';
import Athletes from './Athletes';

class Athlete extends Component {


  render() {
    return (
      <div>
        {/* <h1>{this.state.athlete.firstName + ' ' + this.state.athlete.lastName}</h1> */}
        <p>Data about athlete goes here</p>
        {}

      </div>
    );
  }
}

export default Athlete;

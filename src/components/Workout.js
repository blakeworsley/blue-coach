import React, { Component } from 'react';
import moment from 'moment';

class Workout extends Component {
  render() {
    const { date, mental, performance, physical } = this.props;
    return (
      <li key={date} className="workout-container">
        <p>Date: {moment(date).format('LLL')}</p>
        <p>Average: {Math.round((+mental + +performance + +physical) / 3)}</p>
        <p>Mental: {mental}</p>
        <p>Performance: {performance}</p>
        <p>Physical: {physical}</p>
      </li>
    );
  }
}

export default Workout;

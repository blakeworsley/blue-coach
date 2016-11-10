import React, { Component } from 'react';
import moment from 'moment';

class Workout extends Component {

  render() {
    const { date, mental, performance, physical } = this.props;
    return (
      <li key={date} className="workout-container three">
        <p>Date: {moment(date).format('LLL')}</p>
        <p>Average: {Math.round((parseInt(mental) + parseInt(performance) + parseInt(physical)) / 3)}</p>
        <p>Mental: {mental}</p>
        <p>Performance: {performance}</p>
        <p>Physical: {physical}</p>
      </li>
    );
  }
}

export default Workout;

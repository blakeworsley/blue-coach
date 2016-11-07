import React, { Component } from 'react';
import { Link } from 'react-router';
import { map } from 'lodash';
import moment from 'moment';


class Workout extends Component {
  render() {
    const { date, mental, performance, physical } = this.props;
    return (
      <li key={date}>
        <p>Date: {moment(date).format('LLL')}</p>
        <p>Mental: {mental}</p>
        <p>Performance: {performance}</p>
        <p>Physical: {physical}</p>
      </li>
    );
  }
}

export default Workout;

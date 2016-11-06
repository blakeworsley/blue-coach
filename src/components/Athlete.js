import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { map } from 'lodash';
import Athletes from './Athletes';

import * as actions from '../actions/athlete';

class Athlete extends Component {
  render() {
    const { firstName, lastName, emailAddress, teamName, feedback, route } = this.props;
    let athleteFeedback = feedback.previousDay ?
      feedback.previousDay.map((data) => {
        return <li key={data.date}>
          <p>Date: {data.date}</p>
          <p>Mental: {data.mental}</p>
          <p>Performance: {data.performance}</p>
          <p>Physical: {data.physical}</p>
        </li>
      }) : null
    return (
      <section>
        <h1>{firstName} {lastName}</h1>
        <section>
          {feedback.previousDay ? athleteFeedback : null}
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => state.athlete;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Athlete);

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { map } from 'lodash';
import Athletes from './Athletes';

import * as actions from '../actions/athlete';

class Athlete extends Component {
  render() {
    let { firstName, lastName, emailAddress, teamName, feedback } = this.props;
    const athleteFeedback = map(feedback, (data) => {
      return <li key={data.previousDay.date}>
        <p>Date: {data.previousDay.date}</p>
        <p>Mental: {data.previousDay.mental}</p>
        <p>Performance: {data.previousDay.performance}</p>
        <p>Physical: {data.previousDay.physical}</p>
      </li>
    })
    return (
      <section>
        <h1>{firstName} {lastName}</h1>
        <section>
          {/* {athleteFeedback} */}
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

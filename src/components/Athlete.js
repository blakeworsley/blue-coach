import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { map } from 'lodash';
import Athletes from './Athletes';

import * as actions from '../actions/athlete';

class Athlete extends Component {
  render() {
    const { firstName, lastName, emailAddress, teamName } = this.props;
    const { previousDay } = this.props.feedback;
    const athleteFeedback = map(previousDay, (data) => {
      return <li key={data.date}>
        <p>Date: {data.date}</p>
        <p>Mental: {data.mental}</p>
        <p>Performance: {data.performance}</p>
        <p>Physical: {data.physical}</p>
      </li>
    })
    return (
      <section>
        <h1>{firstName} {lastName}</h1>
        <section>
          {previousDay ? athleteFeedback : null}
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



//
// const athleteFeedback = map(feedback, (data) => {
//   data.map((previousDay) => {
//     debugger;
//     return <li key={previousDay.date}>
//       <p>Date: {previousDay.date}</p>
//       <p>Mental: {previousDay.mental}</p>
//       <p>Performance: {previousDay.performance}</p>
//       <p>Physical: {previousDay.physical}</p>
//     </li>
//   })
// })

// const athleteFeedback = map(feedback, (data) => {
//   for (var i = 0; i < data.length; i++) {
//     return <li key={data[i].date}>
//       <p>Date: {data[i].date}</p>
//       <p>Mental: {data[i].mental}</p>
//       <p>Performance: {data[i].performance}</p>
//       <p>Physical: {data[i].physical}</p>
//     </li>
//   }

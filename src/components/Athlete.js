import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Workout from './Workout';

import * as actions from '../actions/athlete';

class Athlete extends Component {

  loadData(timePeriod){
    timePeriod.map((data) => {
      return (
        <Workout
          key={data.date}
          date={data.date}
          mental={data.mental}
          performance={data.performance}
          physical={data.physical}
        />
      )
    })
  }

  render() {
    const { firstName, lastName, feedback } = this.props;

    return (
      <section className="athlete-card">
        <header className="athlete-card-header">
          <h1>{firstName} {lastName}</h1>
          <h3>Daily</h3>
          <h3>Weekly</h3>
          <h3>Monthly</h3>
        </header>
        <ul>

          {/* {feedback.previousDay ? this.loadData(feedback.previousDay) : null} */}
          {feedback.previousWeek ? this.loadData(feedback.previousWeek) : null}
        </ul>
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
    //
    //
    // let previousDay = feedback.previousDay ?
    //   feedback.previousDay.map((data) => {
    //     return (
    //       <Workout
    //         key={data.date}
    //         date={data.date}
    //         mental={data.mental}
    //         performance={data.performance}
    //         physical={data.physical}
    //       />
    //     )
    //   }) : null

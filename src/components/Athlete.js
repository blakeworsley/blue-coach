import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Workout from './Workout';

import * as actions from '../actions/athlete';

class Athlete extends Component {

  // average = average + Math.round((+mental + +performance + +physical) / 3);
  


  loadData(range){
    // let average;
    return(
      range.map((data) => {
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
      // return average;
    )
  }

  filterView() {
    const { feedback, view } = this.props;
    if(view === 'DAY_VIEW') {return this.loadData(feedback.previousDay)}
    if(view === 'WEEK_VIEW') {return this.loadData(feedback.previousWeek)}
    if(view === 'MONTH_VIEW') {return this.loadData(feedback.previousMonth)}
  }

  render() {
    const { firstName, lastName, feedback, view, dayView, weekView, monthView,
            activeClass, weekActive, monthActive } = this.props;
    return (
      <section className="athlete-card">
        <header className="athlete-card-header">
          <h1 className="athlete-card-name">{firstName} {lastName}</h1>
          <nav className="athlete-card-nav">
            <button className={'button-secondary ' + ((activeClass === 'day-active') ? activeClass : null)}
              onClick={() => dayView()}>Daily</button>
            <button className={'button-secondary ' + ((activeClass === 'week-active') ? activeClass : null)}
              onClick={() => weekView()}>Weekly</button>
            <button className={'button-secondary ' + ((activeClass === 'month-active') ? activeClass : null)}
              onClick={() => monthView()}>Monthly</button>
          </nav>
        </header>
        <ul className="athlete-card-data">
          {feedback.previousWeek ?  this.filterView() : null}
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

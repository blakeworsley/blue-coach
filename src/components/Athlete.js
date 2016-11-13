import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Workout from './Workout';
import WeeklyChart from './WeeklyChart';


import * as actions from '../actions/athlete';

class Athlete extends Component {

  // average = average + Math.round((+mental + +performance + +physical) / 3);
  // let average;
    // if(!range) {return()}
    // return average;

  loadData(range){
    return(
      range.map((data) => {
        return (
          <Workout key={data.date}
            date={data.date}
            mental={data.mental}
            performance={data.performance}
            physical={data.physical}
          />
        )
      })
    )
  }

  filterView() {
    const { feedback, view } = this.props;
    if(view === 'DAY_VIEW') {
      return (
        feedback.previousDay.length ?
        this.loadData(feedback.previousDay) :
        <h1 className="athlete-no-data">No Athlete Data</h1>
      )
    }
    if(view === 'WEEK_VIEW') {
      return (
        feedback.previousWeek.length ?
        this.loadData(feedback.previousWeek) :
        <h1 className="athlete-no-data">No Athlete Data</h1>
      )
    }
    if(view === 'MONTH_VIEW') {
      return (
        feedback.previousMonth.length ?
        this.loadData(feedback.previousMonth) :
        <h1 className="athlete-no-data">No Athlete Data</h1>
      )
    }
  }

  render() {
    const { firstName, lastName, feedback, dayView, weekView, monthView,
            activeClass } = this.props;
    return (
      <section className="athlete-card">
        <header className="athlete-card-header">
          <h1 className="athlete-card-name">{firstName} {lastName}</h1>
          <nav className="athlete-card-nav">
            <button className={'button-secondary ' + ((activeClass === 'day-active') ? activeClass : null)}
              onClick={() => dayView()}>
              Daily
            </button>
            <button className={'button-secondary ' + ((activeClass === 'week-active') ? activeClass : null)}
              onClick={() => weekView()}>
              Weekly
            </button>
            <button className={'button-secondary ' + ((activeClass === 'month-active') ? activeClass : null)}
              onClick={() => monthView()}>
              Monthly
            </button>
          </nav>
        </header>
        <ul className="athlete-card-data">
          {(feedback.previousMonth) ?  this.filterView() : null}

          <WeeklyChart />

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

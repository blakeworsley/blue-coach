import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RC2 from 'react-chartjs2';

import * as actions from '../actions/athlete';


class WeeklyChart extends Component {
  render() {
    const data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Mental',
          backgroundColor: (false ? 'blue' : 'rgba(255,99,132,0.2)'),
          borderColor: (false ? 'blue' : 'rgba(255,99,132,1)'),
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [5, 4, 4, 3, 4, 4, 0],
        },
        {
          label: 'Physical',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [3, 3, 2, 5, 4, 4, 0],
        },
        {
          label: 'Performance',
          backgroundColor: (false ? 'blue' : 'rgba(255,99,132,0.2)'),
          borderColor: (false ? 'blue' : 'rgba(255,99,132,1)'),
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [4, 4, 2, 2, 4, 3, 0],
        },
      ]
    };
    return (
      <RC2 data={data} type='bar' />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes,
    auth: state.auth,
    athlete: state.athlete
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default WeeklyChart;

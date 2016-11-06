import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router';
import { map } from 'lodash';
import Athletes from './Athletes';
import Athlete from './Athlete';

import * as actions from '../actions/athletes';

class Dashboard extends Component {
  componentDidMount() {
    debugger;
    const { getAllCoachesAthletes } = this.props;
    getAllCoachesAthletes();
  }
  render() {
    let { status, athletes } = this.props;
    const renderAthletes = map(athletes, (athlete) => {
      return(
        <Athletes key={athlete.firstName + athlete.lastName + athlete.teamName}
          firstName={athlete.firstName}
          lastName={athlete.lastName}
          teamName={athlete.teamName}
          email={athlete.emailAddress}
        />
      )
    })
    return (
      <section>
        <section>
          <h1>Coach Dashboard</h1>
          {renderAthletes}
        </section>
        <section>
          {athletes ? <Athlete /> : <h1>Loading Athletes</h1>}
        </section>
      </section>
    );
  }
};

const mapStateToProps = (state) => state.athletes;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

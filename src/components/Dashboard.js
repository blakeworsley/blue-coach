import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Athletes from './Athletes';
import Athlete from './Athlete';
import Navigation from './Navigation';

import * as actions from '../actions/athletes';

class Dashboard extends Component {
  getTeam() {
    const { email, team } = this.props.auth;
    const { getCoachesTeam } = this.props;
    getCoachesTeam(email);
    // getAllCoachesAthletes(team);
  }

  render() {
    const { athletes } = this.props.athletes;
    const { status, email, team } = this.props.auth;
    const { getAllCoachesAthletes } = this.props;

    if (status === 'LOGGED_IN') {
      this.getTeam();
      getAllCoachesAthletes(team);
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
          <Navigation/>
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
    return (
      <section>
        <Navigation/>
        <section>
          <h1>Coach Dashboard</h1>
          <h3>Rendering Athletes</h3>
        </section>
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

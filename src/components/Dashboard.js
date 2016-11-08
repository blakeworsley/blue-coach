import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { map } from 'lodash';
import Athletes from './Athletes';
import Athlete from './Athlete';
import Navigation from './Navigation';
import firebase from '../firebase';

import * as actions from '../actions/athletes';

class Dashboard extends Component {
  componentDidMount() {
    const { getCoachesTeam } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      getCoachesTeam(user);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { getAthletesOnTeam } = this.props;
    if (nextProps.athletes.team && nextProps.athletes.team !== this.props.athletes.team) {
      getAthletesOnTeam(nextProps.athletes.team);
    }
  }

  render() {
    const { status, athletes } = this.props.athletes;
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
      <section className='dashboard'>
        <header className='dashboard-header'>
          <Navigation/>
        </header>
        <section className='dashboard-container'>
          <section className='dashboard-athletes-container'>
            <header className='athletes-container-header'>
              <h1>SWIMMERS</h1>
            </header>
            <ul>
              {renderAthletes}
            </ul>
          </section>
          <section className='dashboard-athlete-container'>
            {status}
            {athletes ? <Athlete /> : <h1>Please select an athlete</h1>}
          </section>
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

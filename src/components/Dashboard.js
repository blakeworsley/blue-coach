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
    const { getCoachesTeam, getAllCoachesAthletes } = this.props;
    firebase.auth().onAuthStateChanged((user) => {
      getCoachesTeam(user);
    });
    getAllCoachesAthletes();
    }

  render() {
    const { status, athletes } = this.props.athletes;
    // const { email, team } = this.props.auth;
    // const { getAllCoachesAthletes } = this.props;
    // if (status === ('RECEIVED_TEAM' || 'WAITING_FOR_TEAM')) { getAllCoachesAthletes(); }
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
          {/* {getAllCoachesAthletes()} */}
          {/* {(status === 'RECEIVED_TEAM') ? getAllCoachesAthletes() : null } */}
          {renderAthletes}
        </section>
        <section>
          {status}
          {athletes ? <Athlete /> : <h1>Please select an athlete</h1>}
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
















// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { map } from 'lodash';
// import Athletes from './Athletes';
// import Athlete from './Athlete';
// import Navigation from './Navigation';
//
// import * as actions from '../actions/athletes';
//
// class Dashboard extends Component {
//   // componentDidMount() {
//   //   const { email } = this.props.auth;
//   //   const { getCoachesTeam } = this.props;
//   //   getCoachesTeam(email);
//   // }
//
//   render() {
//     const { athletes } = this.props.athletes;
//     const { status, email, team } = this.props.auth;
//     // const { getCoachesTeam, getAllCoachesAthletes } = this.props;
//     // if (email) { getCoachesTeam(); }
//     if (status === 'LOGGED_IN') {
//       const renderAthletes = map(athletes, (athlete) => {
//         return(
//           <Athletes key={athlete.firstName + athlete.lastName + athlete.teamName}
//             firstName={athlete.firstName}
//             lastName={athlete.lastName}
//             teamName={athlete.teamName}
//             email={athlete.emailAddress}
//           />
//         )
//       })
//       return (
//         <section>
//           <Navigation/>
//           <section>
//             <h1>Coach Dashboard</h1>
//             {renderAthletes}
//           </section>
//           <section>
//             {status}
//             {athletes ? <Athlete /> : <h1>Loading Athletes</h1>}
//           </section>
//         </section>
//       );
//     }
//     return (
//       <section>
//         <Navigation/>
//         <section>
//           <h1>Coach Dashboard</h1>
//           {status}
//           <h3>Rendering Athletes</h3>
//         </section>
//       </section>
//     );
//   }
// };
//
// const mapStateToProps = (state) => {
//   return {
//     athletes: state.athletes,
//     auth: state.auth
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

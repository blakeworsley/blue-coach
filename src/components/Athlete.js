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
      return <li key={data.date}>
        <p>Date: {data.date}</p>
        <p>Mental: {data.mental}</p>
        <p>Performance: {data.performance}</p>
        <p>Physical: {data.physical}</p>
      </li>
    })
    return (
      <div>
        <h1>{firstName} {lastName}</h1>
        <section>
          {console.log('FEEDBACK FROM ATHLETE COMPONENT: ' + feedback)}
          {athleteFeedback}
        </section>
      </div>
    );
  }
}


const mapStateToProps = (state) => state.athlete;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Athlete);




// import React, { Component } from 'react';
// import firebase from '../firebase';
// import { map } from 'lodash';
// import Athletes from './Athletes';
//
// class Athlete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       coach: {teamName: 'SSST'},
//       // needs to come from props ^^^
//
//       athlete: {firstName: 'Ross', lastName: 'Edfort'},
//       routeName: {firstName: 'Ross', lastName: 'Edfort'},
//       // needs to come from props ^^^
//     };
//   }
//
//   componentWillMount() {
//     const team = `${this.state.coach.teamName}`;
//     // from this.state.coach login // SSST
//     const swimmerName = `${this.state.routeName.firstName.toLowerCase()}-${this.state.routeName.lastName.toLowerCase()}`;
//     //from this.state.athlete // ross-edfort
//     firebase.database().ref(`workouts/${team}/${this.props.params.athlete}`).on('value', (snapshot) => {
//       console.log(snapshot.val());
//     });
//   }
//
//   athleteName() {
//     const athlete = this.props.params.athlete;
//     const re = /(.+)-(.+)/gi;
//     const arr = re.exec(athlete);
//     this.setState( { routeName: {firstName: arr[1], lastName: arr[2]} });
//     this.getAthleteData();
//   }
//
//   getAthleteData() {
//     console.log(this.state.athlete);
//   }
//
//
//   render() {
//     const renderAthletes = map(this.state.athletes, (athlete) => {
//       console.log(athlete);
//       return(
//         <Athletes key={athlete.firstName + athlete.lastName + athlete.teamName}
//           firstName={athlete.firstName}
//           lastName={athlete.lastName}
//           teamName={athlete.teamName}
//           email={athlete.emailAddress}
//         />
//       )
//     })
//     return (
//       <div>
//         <h1>{this.state.athlete.firstName + ' ' + this.state.athlete.lastName}</h1>
//         <p>Data about athlete goes here</p>
//         <button onClick={() => this.athleteName()}>Athlete</button>
//         {renderAthletes}
//       </div>
//     );
//   }
// }
//
// export default Athlete;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions/athletes';

class Dashboard extends Component {

  componentDidMount() {
    const { getAllCoachesAthletes } = this.props;
    getAllCoachesAthletes();
  }
  render() {
    const { status, athletes } = this.props;
    return (
     <div>
       <h1>Coach Dashboard</h1>
       {status}
     </div>
    );
  }
};

const mapStateToProps = (state) => state.athletes;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);





// import React, { Component } from 'react';
// import firebase from '../firebase';
// import split from 'split-object';
// import { map } from 'lodash';
// import '../App.css';
// import Athletes from './Athletes';
//
// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: this.props.user,
//       athletes: null
//     };
//   }
//
//   componentDidMount() {
//     const team = 'ssst';
//     firebase.database().ref(`teams/${team}/athletes`).on('value', (snapshot) => {
//       let athletes = snapshot.val();
//       split(athletes).map(athlete => { Object.assign({ key: athlete.key }, athlete.value); });
//       this.setState({athletes: athletes});
//     });
//   }
//
//   signOut(){
//     firebase.auth().signOut();
//     this.context.router.transitionTo("/login");
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
//
//     return (
//       <div>
//         {this.state.user ? this.state.user.email : null}
//         <h1>Coach Dashboard</h1>
//         <ul>{renderAthletes}</ul>
//         <button onClick={() => this.signOut()}>Sign Out</button>
//       </div>
//     );
//   }
// }
//
// Dashboard.contextTypes = {
//   router: React.PropTypes.object
// }
//
// export default Dashboard;

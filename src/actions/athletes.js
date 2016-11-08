import firebase from '../firebase';
import split from 'split-object';


function getCoachesTeam(user) {
  return (dispatch, getState) => {
    dispatch({
      type: 'RECEIVING_TEAM'
    });
    let email = user.email;
    let team;

    firebase.database().ref(`users`).on('value', (snapshot) => {
        let users = Object.values(snapshot.val());
        for (var i = 0; i < users.length; i++) {
          if(users[i].emailAddress === email) {
            team = users[i].teamName.toLowerCase();
          }
        }
      dispatch({
        type: 'RECEIVED_TEAM',
        team: team
      });
    });
  };
}

function getAllCoachesAthletes() {
  return (dispatch, getState) => {
    let team = 'ssst';
    // let team = getState().auth.team;
    firebase.database().ref(`teams/${team}/athletes`).on('value', (snapshot) => {
      let athletes = snapshot.val();
      split(athletes).map(athlete => {
        return Object.assign({ key: athlete.key }, athlete.value);
      });
      if (athletes) {
        dispatch({
          type: 'RECEIVED_ATHLETES',
          athletes: athletes
        });
      } else {
        console.log('NO ATHLETES IN DATABASE UNDER: ' + team);
        dispatch ({
          type: 'NO_ATHLETES'
        });
      }
    }).catch(error => console.log(error))
  };
}

export {
  getCoachesTeam,
  getAllCoachesAthletes
};



// function getCoachesTeam(email) {
//   let team;
//   return (dispatch) => {
//     firebase.database().ref(`users`).on('value', (snapshot) => {
//         let users = Object.values(snapshot.val());
//         for (var i = 0; i < users.length; i++) {
//           if(users[i].emailAddress === email) {
//             team = users[i].teamName.toLowerCase();
//           }
//         }
//       dispatch({
//         type: 'RECEIVED_TEAM',
//         team: team
//       });
//     });
//   };
// }

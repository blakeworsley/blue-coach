import firebase from '../firebase';
import split from 'split-object';

function getAllCoachesAthletes() {
  let team = 'ssst';
  // let email = user.email;
  return (dispatch) => {
    // firebase.database().ref(`users`).on('value', (snapshot) => {
    //     let users = Object.values(snapshot.val());
    //     for (var i = 0; i < users.length; i++) {
    //       if(users[i].emailAddress === email) {
    //         team = users[i].teamName.toLowerCase();
    //       }
    //     }
    // })
    // .then(() => {
      firebase.database().ref(`teams/${team}/athletes`).on('value', (snapshot) => {
        let athletes = snapshot.val();
        split(athletes).map(athlete => {
          return Object.assign({ key: athlete.key }, athlete.value);
        });
        if (athletes) {
          dispatch({
            type: 'RECIEVED_ATHLETES',
            athletes: athletes
          });
        } else {
          console.log('NO ATHLETES IN DATABASE UNDER: ' + team);
          dispatch ({
            type: 'NO_ATHLETES'
          });
        }
      });
    // });
  };
}

// function getUserTeamName() {
//   let email;
//   let teamName;
//   firebase.auth().onAuthStateChanged(coach => {
//     email = coach.email;
//   });
//   firebase.database().ref(`users`).on('value', (snapshot) => {
//       let users = Object.values(snapshot.val());
//       for (var i = 0; i < users.length; i++) {
//         if(users[i].emailAddress === email) {
//           teamName = users[i].teamName.toLowerCase();
//         }
//       }
//   });
//   return teamName;
// }

export {
  getAllCoachesAthletes,
  // getUserTeamName
};



// function getUserTeamName() {
//   let email;
//   let teamName;
//   firebase.auth().onAuthStateChanged(coach => {
//     email = coach.email;
//     firebase.database().ref(`users`).on('value', (snapshot) => {
//       let users = Object.values(snapshot.val());
//       for (var i = 0; i < users.length; i++) {
//         if(users[i].emailAddress === email) {
//           teamName = users[i].teamName.toLowerCase();
//           return teamName;
//         }
//       }
//     });
//   });
// }

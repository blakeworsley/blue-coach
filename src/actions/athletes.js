import firebase from '../firebase';
import split from 'split-object';


function getCoachesTeam(user) {
  return (dispatch) => {
    dispatch({
      type: 'RECEIVING_TEAM'
    });
    let email = user.email;
    let team;

    firebase.database().ref(`users`).once('value', (snapshot) => {
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

function getAthletesOnTeam(team) {
  return (dispatch) => {
    firebase.database().ref(`teams/${team}/athletes`).once('value', (snapshot) => {
      let athletes = snapshot.val();
      split(athletes).map(athlete => {
        return Object.assign({ key: athlete.key }, athlete.value);
      });
      dispatch({
        type: 'RECEIVED_ATHLETES',
        athletes: athletes
      });
    }).catch(error => {
       console.log('NO ATHLETES IN DATABASE UNDER: ', team, error);
       dispatch ({
         type: 'NO_ATHLETES'
       });
    });
  };
}

export {
  getCoachesTeam,
  getAthletesOnTeam
};

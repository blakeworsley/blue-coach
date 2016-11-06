import firebase from '../firebase';
import split from 'split-object';

function getAllCoachesAthletes() {
  const team = 'ssst';
  return (dispatch) => {
    firebase.database().ref(`teams/${team}/athletes`).on('value', (snapshot) => {
      let athletes = snapshot.val();
      split(athletes).map(athlete => {
        Object.assign({ key: athlete.key }, athlete.value);
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
  };
}

function selectedAthlete(firstName, lastName, teamName, emailAddress) {
  const namePath = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
  return (dispatch) => {
    firebase.database().ref(`workouts/${teamName.toLowerCase()}/${namePath}`)
    .on('value', (snapshot) => {
      debugger;
      dispatch({
        type: 'SELECTED_ATHLETE',
        feedback: snapshot.val(),
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
        emailAddress: emailAddress,
        route: namePath
      });
    });
  };
}


export {
  getAllCoachesAthletes,
};

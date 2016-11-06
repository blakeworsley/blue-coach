import firebase from '../firebase';

function selectedAthlete(firstName, lastName, teamName) {
  const namePath = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
  teamName = 'SSST';
  //TODO: Make the SSST lowercase in other app and they delete line above
  return (dispatch) => {
    firebase.database().ref(`workouts/${teamName}/${namePath}`).on('value', (snapshot) => {
      console.log(snapshot.val());
      dispatch({
        type: 'SELECTED_ATHLETE',
        firstName: firstName,
        lastName: lastName,
        teamName: teamName,
        route: namePath
      });
    });
  };
}


export {
  selectedAthlete
};

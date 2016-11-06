import firebase from '../firebase';

function selectedAthlete(firstName, lastName, teamName, emailAddress) {
  const namePath = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
  //TODO: Make the SSST lowercase in other app and they delete line above
  return (dispatch) => {
    firebase.database().ref(`workouts/${teamName.toLowerCase()}/${namePath}`).on('value', (snapshot) => {
      console.log(snapshot.val());
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
  selectedAthlete
};

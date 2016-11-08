import firebase from '../firebase';

function startListeningToAuth() {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(coach => {
      if (coach) {
        dispatch({
          type: 'LOGIN',
          uid: coach.uid,
          username: coach.displayName,
          email: coach.email
        });
      } else {
        if (getState().auth.status !== 'ANONYMOUS') {
          dispatch ({
            type: 'LOGOUT'
          });
        }
      }
    });
  };
}

function logIn(emailAddress, password) {
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    .then(coach => {
      dispatch({
        type: 'LOGIN',
        uid: coach.uid,
        username: coach.displayName,
        email: coach.email
      });
    })
    .catch(error => {
      console.log('ERROR LOGGING IN: ', error);
    });
  };
}

function logOut() {
  return(dispatch) => {
    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out succeeded');
    })
    .catch(error => {
      console.log('SIGN OUT ERROR IN "authenticate.js": ', error);
    }).then(() => {
      dispatch({
        type: 'LOGOUT'
      });
    });
  };
}

function getCoachesTeam() {
  return (dispatch, getState) => {
    dispatch({
      type: 'RECEIVING_TEAM'
    });

    let email = getState().auth.email;
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

export {
  startListeningToAuth,
  logIn,
  logOut,
  getCoachesTeam
};

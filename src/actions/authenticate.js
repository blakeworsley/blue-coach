import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDH5BclDnRrnvE1JBfUwKz00b-SocM8ksI",
  authDomain: "blue-d8d04.firebaseapp.com",
  databaseURL: "https://blue-d8d04.firebaseio.com",
  storageBucket: "blue-d8d04.appspot.com",
  messagingSenderId: "426528791210"
};

function startListeningToAuth() {
  return (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(coach => {
      if (coach) {
        dispatch({
          type: 'LOGIN',
          uid: coach.uid,
          username: coach.displayName
          // TODO: check displayName above - may cause errors
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

function logIn() {
  const emailAddress = 'pattiworsley@gmail.com';
  const password = '123456';
  return (dispatch) => {
    dispatch({
      type: 'ATTEMPTING_LOGIN'
    });

    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
    .then(result => {
      dispatch({
        type: 'LOGIN',
        uid: result.user.uid,
        username: result.user.displayName
      });
    })
    .catch(error => {
      console.log('ERROR LOGGING IN: ', error);
    });
  };
}

function logOut() {
  return(dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });

    firebase.auth().signOut()
    .then(() => {
      console.log('Sign out succeeded');
    })
    .catch(error => {
      console.log('SIGN OUT ERROR IN "authenticate.js": ', error);
    });
  };
}

export {
  startListeningToAuth,
  logIn,
  logOut,
};

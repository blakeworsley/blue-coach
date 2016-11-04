import firebase from '../firebase';

const authenticate = {
  isAuthenticated: false,
  authenticate(cb) {
    firebase.auth().onAuthStateChanged(user => {
      this.isAuthenticated = user;
    })
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    cb();
    setTimeout(cb, 100); // weird bug if async?
  }
}

export default authenticate;

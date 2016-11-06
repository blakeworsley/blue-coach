import firebase from '../firebase';
import { map } from 'lodash';
import moment from 'moment';


function selectedAthlete(firstName, lastName, teamName, emailAddress) {
  const namePath = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;

  return (dispatch) => {
    firebase.database().ref(`workouts/${teamName.toLowerCase()}/${namePath}`).on('value', (snapshot) => {
      const millisecond = 1;
      const second = (millisecond * 1000);
      const minute = (second * 60);
      const hour = (minute * 60);
      const day = (hour * 24);
      const week = (day * 7);
      const month = (day * 30);

      let previousDay = [];
      let previousWeek = [];
      let previousMonth = [];
      let previousSeason = [];
      let currentDate = Date.now();

      map(snapshot.val(), (data) => {
        if ((currentDate - data.date) <= month ) { previousMonth.push(data); }
        if ((currentDate - data.date) <= week ) { previousWeek.push(data); }
        if ((currentDate - data.date) <= day ) {
          return previousDay.push(data); }
      });
      dispatch({
        type: 'SELECTED_ATHLETE',
        feedback: { previousDay, previousWeek, previousMonth, previousSeason },
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

export const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null,
    email: null,
  },
  athletes: {
    status: 'NO_ATHLETES',
    athletes: []
  },
  athlete: {
    status: 'DESELECTED',
    feedback: {previousDay: null, previousWeek: null, previousMonth: null, previousSeason: null},
    firstName: null,
    lastName: null,
    teamName: null,
    emailAddress: null,
    route: null
  }
};

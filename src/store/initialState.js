export const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null,
    email: null
  },
  athletes: {
    status: 'NO_ATHLETES',
    team: null,
    athletes: []
  },
  athlete: {
    status: 'DESELECTED',
    view: 'DAY_VIEW',
    feedback: {previousDay: null, previousWeek: null, previousMonth: null, previousSeason: null},
    firstName: null,
    lastName: null,
    teamName: null,
    emailAddress: null,
    route: null
  }
};

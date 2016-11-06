export const initialState = {
  auth: {
    status: 'ANONYMOUS',
    username: null,
    uid: null
  },
  athletes: {
    status: 'NO_ATHLETES',
    athletes: []
  },
  athlete: {
    status: 'DESELECTED',
    feedback: null,
    firstName: null,
    lastName: null,
    teamName: null,
    emailAddress: null,
    route: null
  }
};

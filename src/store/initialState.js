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
    firstName: null,
    lastName: null,
    teamName: null,
    route: null
  }
};

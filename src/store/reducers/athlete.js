import { initialState } from '../initialState.js';

export default function athleteReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'SELECTED_ATHLETE':
      return {
        status: 'ATHLETE_SELECTED',
        feedback: action.feedback,
        firstName: action.firstName,
        lastName: action.lastName,
        teamName: action.teamName,
        emailAddress: action.emailAddress,
        route: action.namePath
      };
    case 'DESELECTED':
      return {
        status: 'DESELECTED',
        feedback: null,
        firstName: null,
        lastName: null,
        teamName: null,
        emailAddress: null,
        route: null
      };
    default:
      return state;
  }
}

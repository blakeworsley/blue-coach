import { initialState } from '../initialState.js';

export default function athleteReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'SELECTED_ATHLETE':
      return {
        status: 'ATHLETE_SELECTED',
        firstName: action.firstName,
        lastName: action.lastName,
        teamName: action.teamName,
        route: action.namePath
      };
    case 'DESELECTED':
      return {
        status: 'DESELECTED',
        firstName: null,
        lastName: null,
        teamName: null,
        route: null
      };
    default:
      return state;
  }
}

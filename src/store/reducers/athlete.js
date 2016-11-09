import { initialState } from '../initialState.js';

export default function athleteReducer(state = initialState.athlete, action) {
  switch(action.type) {
    case 'SELECTED_ATHLETE':
    return Object.assign({}, state, {
        status: 'ATHLETE_SELECTED',
        feedback: action.feedback,
        firstName: action.firstName,
        lastName: action.lastName,
        teamName: action.teamName,
        emailAddress: action.emailAddress,
        route: action.namePath
      });
    case 'DESELECTED':
      return Object.assign({}, state, {
        status: 'DESELECTED',
        feedback: null,
        firstName: null,
        lastName: null,
        teamName: null,
        emailAddress: null,
        route: null
      });
    case 'DAY_VIEW':
      return Object.assign({}, state, {
        view: 'DAY_VIEW'
      });
    case 'WEEK_VIEW':
      return Object.assign({}, state, {
        view: 'WEEK_VIEW'
      });
    case 'MONTH_VIEW':
      return Object.assign({}, state, {
        view: 'MONTH_VIEW'
      });
    default:
      return state;
  }
}

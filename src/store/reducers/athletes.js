import { initialState } from '../initialState.js';

export default function athletesReducer(state = initialState.athletes, action) {
  switch(action.type) {
    case 'RECEIVING_TEAM':
      return Object.assign({}, state, {
        status: 'RECEIVING_TEAM',
        team: null
      });
    case 'RECEIVED_TEAM':
      return Object.assign({}, state, {
        status: 'RECEIVED_TEAM',
        team: action.team,
        athletes: []
      });
    case 'RECEIVED_ATHLETES':
      return Object.assign({}, state, {
        status: 'ALL_ATHLETES_RECEIVED',
        athletes: action.athletes
      });
    case 'NO_ATHLETES':
      return Object.assign({}, state, {
        status: 'NO_ATHLETES',
        athletes: []
      });
    default:
      return state;
  }
}

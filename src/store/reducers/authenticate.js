import { initialState } from '../initialState.js';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'ATTEMPTING_LOGIN':
      return Object.assign({}, state, {
        status: 'AWAITING_AUTH_RESPONSE',
        username: 'guest',
        uid: null,
        email: null,
      });
    case 'LOGOUT':
      return Object.assign({}, state, {
        status: 'ANONYMOUS',
        username: null,
        uid: null,
        email: null,
      });
    case 'LOGIN':
      return Object.assign({}, state, {
        status: 'LOGGED_IN',
        username: action.username,
        uid: action.uid,
        email: action.email
      });
    default:
      return state;
  }
}

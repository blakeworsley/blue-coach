import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authenticateReducer from './reducers/authenticate';
import initialState from './initialState';

export default createStore(
  combineReducers({
    auth: authenticateReducer,
  }),
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authenticateReducer from './reducers/authenticate';
import athletesReducer from './reducers/athletes';
import athleteReducer from './reducers/athlete';
import initialState from './initialState';

export default createStore(
  combineReducers({
    auth: authenticateReducer,
    athletes: athletesReducer,
    athlete: athleteReducer
  }),
  initialState,
  compose (
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

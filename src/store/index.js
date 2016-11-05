import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import authenticateReducer from './reducers/authenticate';
import athletesReducer from './reducers/athletes';
import initialState from './initialState';

export default createStore(
  combineReducers({
    auth: authenticateReducer,
    athletes: athletesReducer,
  }),
  initialState,
  compose (
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

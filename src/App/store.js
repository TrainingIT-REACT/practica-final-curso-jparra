import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

// Reducers
import albums from './reducers/albums';
import login from './reducers/login';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

export default createStore(
  combineReducers({
    albums,
    login
  }),
  enhancer
);
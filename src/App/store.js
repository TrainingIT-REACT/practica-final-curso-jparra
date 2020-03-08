import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import promise from 'redux-promise-middleware'

// Reducers
import albums from './reducers/albums';
import songs from './reducers/songs';
import login from './reducers/login';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, promise),
  // other store enhancers if any
);

export default createStore(
  combineReducers({
    albums,
    songs,
    login
  }),
  enhancer
);
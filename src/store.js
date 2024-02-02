// store.js

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';  // Import redux-promise

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware)  // Apply redux-promise middleware
);

export default store;

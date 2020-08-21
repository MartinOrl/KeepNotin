import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';  //?   Debugging tool

import rootReducer from './rootReducer';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


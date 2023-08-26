import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todoitem from './todoitem';

const rootReducer = combineReducers({
  todoitem
});

let enhancer;

const logger = require('redux-logger').default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore;

import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);

export default store;

/* const store = createStore(
  reducer,
  applyMiddleware(thunk)
); */
// https://github.com/zalmoxisus/redux-devtools-extension
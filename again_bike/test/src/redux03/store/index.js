import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import mySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySaga)

export default store;

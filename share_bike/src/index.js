import React from 'react';
import ReactDOM from 'react-dom';
// import Admin from './admin';
// import Admin from './pages/route_demo/route3/router';
import Router from './router';

import { Provider } from 'react-redux'
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById('root'));

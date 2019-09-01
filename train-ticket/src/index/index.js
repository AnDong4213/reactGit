import React from 'react';
import ReactDom from 'react-dom';
import { Prodiver } from 'react-redux';
import 'normalize.css/normalize.css';

import store from './store';
import './index.css';
import App from './App.jsx';

ReactDom.render(
  <Prodiver store={store}>
    <App />
  </Prodiver>
  , document.getElementById('root')
)



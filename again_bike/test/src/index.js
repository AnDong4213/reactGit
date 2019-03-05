import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './react-redux/store'

import TodoList from './react-redux/TodoList';

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
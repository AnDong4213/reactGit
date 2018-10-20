import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store'

// Provider把store提供给了它内部所有的组件了
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

// ReactDOM.render(App, document.getElementById('root'));
render(App, document.getElementById('root'));

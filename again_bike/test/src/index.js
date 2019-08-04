import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// import App from './route/demo1';
import App from './route/demo2';

// import App from './redux-chun/TodoList';


// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


// react-router  是个基础包
// react-router-dom是基于浏览器端的路由，react-native端的提供了其他的路由插件..已经封装的一些基于react-router的功能

// 把路由全部包在switch里面，当匹配到以后，不会向下执行了。

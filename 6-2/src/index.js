import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './base.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { AppContainer } from 'react-hot-loader';

fetch('/api/comments/show?id=4199740256395164&page=1')
    .then(res => {
        res.json().then(data => {
            console.log(data.data)
        })
    })

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept('./App', () => {
        // console.log(module.hot)
        render(App)
    })
}



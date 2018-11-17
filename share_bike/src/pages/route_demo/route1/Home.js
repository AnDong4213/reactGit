import React from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

import About from './About';
import Main from './Main';
import Topic from './Topic';

export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topic">Topic</Link></li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route path="/" exact component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}












import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Main from './Main';
import Topic from './Topic';
import Home from './Home';

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home>
            </Router>
        )
    }
}

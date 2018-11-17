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
                <div>
                    <Home />
                    <Route path="/main" render={() => 
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    {/* <Route path="/" exact component={Main}></Route> */}
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </div>
                {/* <Home>
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topic" component={Topic}></Route>
                </Home> */}
            </Router>
        )
    }
}

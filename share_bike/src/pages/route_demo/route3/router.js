import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Main from './Main';
import Topic from './Topic';
import Home from './Home';
import Info from './Info';
import NoMatch from './NoMatch';

export default class IRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Home />
                    <Switch>
                        <Route path="/main" render={() => 
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

import React from 'react'

import { HashRouter, Route, Link, Switch } from 'react-router-dom'

import Main from './Main' // 必须有'./' , 否则会报错...
import About from './About'
import Topic from './Topic'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topic">Topic</Link></li>
          </ul>
          <hr />
          {/* <Route exact path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={Topic}></Route> */}
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}


import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom' 

import Main from './Main' // 必须有'./' , 否则会报错...
import About from './About'
import Topic from './Topic'

import Home from './Home'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route exact path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={Topic}></Route>
          <p style={{color: 'red'}}>哈哈</p>
        </Home>
      </Router>
    )
  }
}

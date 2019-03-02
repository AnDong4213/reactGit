import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom' 

import Main from './Main' // 必须有'./' , 否则会报错...
import About from './About'
import Topic from './Topic'
import NoMatch from './nomatch'
import Other from './other'
import A from './A'
import B from './B'
import C from './C'

import Home from './Home'
// 嵌套路由时不要精确匹配  exact    Switch里的标签除了route外都不起作用...

export default class IRouter extends React.Component {
  render() {
    const loggedIn = true;

    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" 
              render={() =>
                <Main>
                  <Route path="/main/a" component={A}></Route>
                  <Route path="/main/b" component={B}></Route>
                </Main>
              }
            >
            </Route>

            <Route path="/about"
              render={() => 
                <About>
                  <Route path="/about/:id" component={C}></Route>
                </About>
              }
            >
            </Route>

            <Route path="/topic" render={() => (
              loggedIn ? (
                <Topic />
              ) : (
                <Redirect to="/other" />
              )
            )}>
            </Route>

            <Route path="/other" component={Other}></Route>

            <Route component={NoMatch}></Route>
            <p style={{color: 'red'}}>呵呵ddd</p>
          </Switch>
          <p style={{color: 'red'}}>哈哈</p>
        </Home>
      </Router>
    )
  }
}

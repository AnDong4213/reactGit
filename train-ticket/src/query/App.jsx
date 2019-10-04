import React from 'react'
import { connect } from 'react-redux'
import './App.css'

import Nav from '../common/Nav'
import List from './List'
import Bottom from './Bottom'

function App(props) {
  return (
    <div>
      <Nav />
      <List />
      <Bottom />
    </div>
  )
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

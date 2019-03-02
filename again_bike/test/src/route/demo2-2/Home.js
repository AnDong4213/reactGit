import React from 'react'

import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props);  // {children: Array(4)}
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home1</Link></li>
          <li><Link to="/about">About1</Link></li>
          <li><Link to="/topic">Topic1</Link></li>
        </ul>
        <hr />
        { this.props.children }
      </div>
    )
  }
}


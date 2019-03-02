import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './index.css'

export default class Home extends React.Component {
  componentDidMount() {
    // console.log(this.props);  // {children: Array(4)}
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/main">Home1</Link></li>
          <li><Link to="/about">About1</Link></li>
          <li><Link to="/topic">Topic1</Link></li>
          <li>
            <NavLink 
              to="/other" 
              activeClassName="selected"
              activeStyle={{
                fontWeight: "bold"
              }}
            >
              NavLink--other
            </NavLink>
          </li>
          <li><Link to="/imooc">imooc</Link></li>
        </ul>
        <hr />
        { this.props.children }
      </div>
    )
  }
}


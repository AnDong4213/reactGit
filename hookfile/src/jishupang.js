import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Indexk'
import List from './List'
import List0 from './List0'

function Example3() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`useEffect=>You clicked ${count} times`)
  }, [count])

  useEffect(() => {
    console.log(22)
  }, [])

  return(
    <div style={{margin: 20}}>
      <h3 onClick={() => setCount(c => c + 1)}>{count}</h3>
      <List0 />
      <Router>
        <ul>
          <Link to="/">首页</Link>
          <Link to="/list">列表</Link>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  )
}

export default Example3;

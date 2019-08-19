import React, { useState, useEffect } from 'react';
import Counter from './reducer'
import './App.css';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(99)
    document.title = `You clicked ${this.state.count} times`;
  }

  shouldComponentUpdate(nextP, nextS) {
    // console.log(nextP, nextS)
    if (nextS.count === 10) {
      return false
    }
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState)
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function AppChild(props) {
  const [aa, setAa] = useState(props.name);
  const haha = () => {
    setAa(aa => aa + 1)
  }
  return(
    <div>
      <h1 onClick={haha}>{aa}</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    document.title = count;
    return () => {
      // console.log(99)
    }
  })

  return (
    <div className="App">
      <Example id="12" />
      <AppChild name={count} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <div style={{margin: 20}}>
        <Counter />
      </div>
    </div>
  );
}

export default App;

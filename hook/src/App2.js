import React, { Component, useState, useEffect, createContext, useContext } from 'react';
import './App.css';

class App1 extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    })
  }
  componentDidMount() {
    document.title = this.state.count;

    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false)
  }
  componentDidUpdate() {
    document.title = this.state.count;
  }
  render() {
    const { count, size } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => {this.setState({count: count + 1})}}
        >
          Click ({count})
          Size ({size.width}X{size.height})
        </button>
      </div>
    )
  }
}

function App() {
  // let [count, setCount] = useState(0);
  let [count, setCount] = useState(() => {
    console.log('initial count');
    return 0
  })
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(() => {
    console.log('count: ', count)
  }, [count]); // 如果是undefined，任何数据变化都会触发，[]只触发一次，数据不变化。。[count]正常
  useEffect(() => {
    document.title = count
  })
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize, onResize', false)
    }
  }, [])
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false);
    return () => {
      document.querySelector('#size').removeEventListener('click', onClick, false)
    }
  })

  const onClick = () => {
    console.log('onClick')
  }
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {setCount(count + 1)}}
      >
        Click ({count}))
      </button>
      {
        count % 2 ?
        <p id="size" style={{cursor: 'pointer'}}>Size ({size.width}X{size.height})</p>
        : <span id="size" style={{cursor: 'pointer'}}>Size ({size.width}X{size.height})</span>
      }
    </div>
  )
}

const CountContext = createContext();
class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}
class Bar extends Component {
  static contextType = CountContext;
  render() {
    // console.log(this)
    const count = this.context;
    return (
      <h1>{count}</h1>
    )
  }
}

function Counter() {
  const count = useContext(CountContext);
  return (
    <h1>{count}</h1>
  )
}
function App2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {setCount(count + 1)}}
      >
        Click ({count})
      </button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default App2;

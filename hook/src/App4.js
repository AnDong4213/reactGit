import React, { Component, PureComponent, useState, useEffect, createContext, useContext, useMemo, useCallback, memo, useRef } from 'react';
import './App.css';

/* class Counter extends PureComponent {
  render() {
    const { props } = this;
    return (
      <h1>{props.count}</h1>
    )
  }
} */
function useCounter(count) {
  return (
    <h1>{count}</h1>
  )
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  let it = useRef();

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  })
  return [count, setCount];
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }, []);
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    }
  }, [])
  return size
}

function App() {
  const [count, setCount] = useCount(0);
  const Counter = useCounter(count);
  const size = useSize();
  return (
    <div>
      <button 
        type="button"
        onClick={() => {setCount(count + 1)}}
      >
        Click ({count}) 
        Size: {size.width}X{size.height}
      </button>
      {Counter}
    </div>
  )
}

export default App;

import React, { Component, PureComponent, useState, useEffect, createContext, useContext, useMemo, useCallback, memo, useRef } from 'react';
import './App.css';

/* function Counter(props) {
  return (
    <h1>{props.count}</h1>
  )
} */
/* const Counter = memo((props) => {
  console.log('counter')
  return (
    <h1 onClick={props.onClick}>{props.count}</h1>
  )
}) */

class Counter extends PureComponent {
  speak() {
    console.log(`counter is ${this.props.count}`)
  }
  render() {
    const { props } = this;
    return (
      <h1 onClick={props.onClick}>{props.count}---</h1>
    )
  }
}
function App2() {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(2);
  const double = useMemo(() => {
    return count * 2
  }, [count === 3])    //状态变化了2次,从false变为true,从true变为false
  const counterRef = useRef();
  let it = useRef();

  /* const onClick = () =>  {
    console.log('onClick')
  } */
  /* const onClick = useMemo(() => {
    return () =>  {
      console.log('onClick')
    }
  }, []) */
  /* const onClick = useCallback(() => {
    console.log('onClick');
    setClickCount(clickCount + 1)
  }, [clickCount]) */
  const onClick = useCallback(() => {
    // console.log('onClick');
    // console.log(counterRef.current)
    counterRef.current.speak()
    setClickCount(c => c + 1);
  }, [])
  // useCallback是useMemo的一种变体而已  useMomo(() => fn)  useCallback(fn),如果useMemo的返回值是一个函数的话，可简写成useCallback的形式, useCallback不能返回值 return 
  //  memoization 是一个空间换时间的方式，存储执行结果，下次再次发生相同的输入会直接输出结果，提高了执行的速度
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

  return (
    <div>
      <button
        type="button"
        onClick={() => {setCount(count + 1)}}
      >
        Click ({count})
        Double ({double})
      </button>
      <Counter ref={counterRef} count={double} onClick={onClick} />
      <i>{clickCount}</i>
    </div>
  )
}

export default App2;

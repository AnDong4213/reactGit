import React, {
  useCallback,
  useState,
  useEffect,
  useRef
} from 'react';
import * as data from './module';


/* export default function MeasureExample() {
  const [height, setHeight] = useState(0);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      console.log(node)
      console.log(node.getBoundingClientRect())
      node.style.color = 'red';
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <>
      <h1 ref={measuredRef}>Hello, world</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  );
} */

/* function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}
export default function MeasureExample() {
  const [rect, ref] = useClientRect();
  // console.log(rect)
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null &&
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  );
} */

function Example(props) {
  // 把最新的 props 保存在一个 ref 中
  let latestProps = useRef(props);
  useEffect(() => {
    latestProps.current = props;
  });

  useEffect(() => {
    function tick() {
      // 在任何时候读取最新的 props
      console.log(latestProps.current);
    }
    tick()
    // const id = setInterval(tick, 1000);
    // return () => clearInterval(id);
  }, []); // 这个 effect 从不会重新执行

  return ( <
    div >
    <
    h1 > 看看 < /h1> </
    div >
  )
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const id = useRef();

  useEffect(() => {
    console.log(data.default()); // Hello world
    console.log(data);
    id.current = setInterval(() => {
      // setCount(count + 1); // 这个 effect 依赖于 `count` state  错误......
      setCount(a => a + 1)
    }, 1000);
  }, []); // 🔴 Bug: `count` 没有被指定为依赖

  useEffect(() => {
    if (count > 10) {
      clearInterval(id.current)
    }
  })

  return ( <
    div >
    <
    h1 > {
      count
    } < /h1> <
    Example count = {
      count
    }
    age = "22" / >
    <
    /div>
  );
}
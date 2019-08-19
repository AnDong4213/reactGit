import React, { useCallback, useState, useEffect } from 'react'

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

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // setCount(count + 1); // 这个 effect 依赖于 `count` state  错误......
      setCount(a => a + 1)
    }, 1000);
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` 没有被指定为依赖

  return <h1>{count}</h1>;
}











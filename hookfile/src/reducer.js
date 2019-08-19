import React, { useReducer, useRef } from 'react';

const initialState = {count: 0};
function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.para};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus()
  }
  console.log(inputEl)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', para: 99})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>

      <div>
        <input ref={inputEl} />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    </>
  );
}

/* function init(initialCount) {
  return {count: initialCount};
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}
export default function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
} */



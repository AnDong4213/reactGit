import React, { Component, PureComponent, useState, useEffect, createContext, useContext, useMemo, useCallback, memo, useRef } from 'react';
import { createSet, createAdd, createToggle, createRemove } from './actions.js';
import './App.css';
let idSeq = Date.now();

function bindActionCreators(actionCreators, dispatch) {
  let ret = {};
  for (let key in actionCreators) {
    ret[key] = function(...args) {
      const actionCreator = actionCreators[key];
      const action = actionCreator(...args);
      dispatch(action)
    }
  }
  return ret;
}
// { ...bindActionCreators({addTodo: createAdd}, dispatch) }

const Control = memo(function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();
    if (newText.length) {
      addTodo({
        id: ++idSeq,
        text: newText,
        complete: false
      })
    }
    inputRef.current.value = ''
  }
  return (
    <div>
      <h1>
        todos
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder=""
        />
      </form>
    </div>
  )
})

function TodoItem(props) {
  const {
    todo: {
      id,
      complete,
      text
    },
    removeTodo,
    toggleTodo
  } = props;
  const onChange = () => {
    toggleTodo(id);
  }
  const onRemove = () => {
    removeTodo(id)
  }
  return (
    <li>
      <input type="checkbox" onChange={onChange} checked={complete} />
      <label className={complete ? 'complete' : ''}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  )
}
const Todos = memo(props => {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <ul>
      {
        todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          )
        })
      }
    </ul>
  )
})

const LS_KEY = '_$todos_';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [incrementCount, setIncrementCount] = useState(0);

  function reducer(state, action) {
    const { type, payload } = action;
    const { todos, incrementCount } = state;
    switch(type) {
      case 'set':
        return {
          ...state,
          todos: payload,
          incrementCount: incrementCount + 1
        }
        break;
      case 'add':
        return {
          ...state,
          todos: [...todos, payload],
          incrementCount: incrementCount + 1
        }
        break;
      case 'remove':
        return {
          ...state,
          todos: todos.filter(todo => {
            return todo.id !== payload
          })
        }
        break;
      case 'toggle':
        return {
          ...state,
          todos: todos.map(todo => {
            return todo.id === payload ? 
              {
                ...todo,
                complete: !todo.complete
              }
              : todo
          })
        }
        break;
      default:
    }
  }

  const dispatch = useCallback((action) => {
    const { type, payload } = action;
    switch(type) {
      case 'set':
        setTodos(payload);
        setIncrementCount(c => c + 1);
        break;
      case 'add':
        setTodos(todos => [...todos, payload]);
        setIncrementCount(c => c + 1);
        break;
      case 'remove':
          setTodos(todos => todos.filter(todo => {
            return todo.id !== payload
          }))
        break;
      case 'toggle':
        setTodos(todos => todos.map(todo => {
          return todo.id === payload ? 
            {
              ...todo,
              complete: !todo.complete
            }
            : todo
        }))
        break;
      default:
    }
  }, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    // setTodos(todos)
    dispatch(createSet(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="ma">
      <Control { ...bindActionCreators({addTodo: createAdd}, dispatch) } />
      <Todos
        todos={todos}
        {
          ...bindActionCreators({
            removeTodo: createRemove,
            toggleTodo: createToggle
          }, dispatch)
        }
      />
    </div>
  )
}

export default TodoList;

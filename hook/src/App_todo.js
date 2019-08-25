import React, { Component, PureComponent, useState, useEffect, createContext, useContext, useMemo, useCallback, memo, useRef } from 'react';
import './App.css';
let idSeq = Date.now();

const Control = memo(props => {
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
      <h1>todos</h1>
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
    toggleTodo,
    removeTodo
  } = props;
  const onChange = () => {
    toggleTodo(id);
	console.log(id)
	console.log(complete)
	console.log(text)
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

  const addTodo = useCallback(todo => {
    setTodos(todos => [...todos, todo])
  }, [])
  const removeTodo = useCallback(id => {
    setTodos(todos => todos.filter(todo => {
      return todo.id !== id
    }))
  }, [])
  const toggleTodo = useCallback(id => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id ? 
        {
          ...todo,
          complete: !todo.complete
        }
        : todo
    }))
  }, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="ma">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  )
}

export default TodoList;

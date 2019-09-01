const reducers = {
  todos(state, action){
    const { type, payload } = action;
    switch(type) {
      case 'set':
        return payload
        break;
      case 'add':
        return [...state, payload]
        break;
      case 'remove':
        return state.filter(todo => {
          return todo.id !== payload
        })
        break;
      case 'toggle':
        return state.map(todo => {
          return todo.id === payload ?
            {
              ...todo,
              complete: !todo.complete
            }
            : todo
        })
      default:
        return state;
    }
  },
  incrementCount(state, action) {
    const { type } = action;
    switch(type) {
      case 'set':
      case 'add': 
        return state + 1;
        break;
      default:
        return state
    }
  }
}

function combineReducers(reducers) {
  return function reducer(state, action) {
    const changed = {}
    for(let key in reducers) {
      reducers[key](state[key], action)
    }
    return {
      ...state,
      ...changed
    }
  }
}

export default combineReducers(reducers);
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  count: 0
}
const userInitialState = {
  username: 'zhao',
}

const ADD = 'ADD'
const UPDATE_USERNAME = 'UPDATE_USERNAME'

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case ADD:
      return {count: state.count + (action.num || 1)}
    default:
      return state
  }
}
function userReducer(state = userInitialState, action) {
  switch(action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name
      }
    default:
      return state
  }
}
// action creator
export function add(num) {
  return {
    type: ADD,
    num
  }
}
// 异步action
function addAsync(num) {
  return (dispatch, getState) => {
    // console.log(getState());
    setTimeout(() => {
      dispatch(add(num))
    }, 2000)
  }
}

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer
})

/* store.dispatch(add(9))
store.subscribe(() => {
  // console.log(store.getState())
})
store.dispatch(addAsync(3))
store.dispatch({ type: UPDATE_USERNAME, name: 'andong' }) */

export default function initializeStore(state) {
  const store = createStore(
    allReducers,
    Object.assign({}, {
      counter: initialState,
      user: userInitialState
    }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}

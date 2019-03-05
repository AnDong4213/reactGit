// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

// 原始数据哟...
const defaultState = {
  inputValue: '',
  list: ['AA']
};

export default (state = defaultState, action) => {

  if (action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState;
  }
  if (action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }
  if (action.type === 'add_del') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state
}


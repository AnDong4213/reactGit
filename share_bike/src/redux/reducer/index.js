import { type } from './../action'

const defaultState = {
  menuName: ''
}

/*export default (state = defaultState, action) => {
  switch (action.type) {
    case type.SWITCH_MENU:
      let newState = JSON.parse(JSON.stringify(state))
      newState.menuName = action.menuName
      return newState
      break;
    default:
      return state
      break;
  }
}*/

export default (state = defaultState, action) => {
  if (action.type === type.SWITCH_MENU) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.menuName = action.menuName
    return newState;
  }
  return state;
}

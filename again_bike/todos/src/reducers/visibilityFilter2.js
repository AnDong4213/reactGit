import { VisibilityFilters2 } from '../actions'

const visibilityFilter2 = (state = VisibilityFilters2.HEHE, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER2':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter2

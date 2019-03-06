import { combineReducers } from 'redux'
import todosKl from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityFilter2KK from './visibilityFilter2'

export default combineReducers({
  todosKl,
  visibilityFilter,
  visibilityFilter2KK
})

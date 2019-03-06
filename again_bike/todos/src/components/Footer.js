import React from 'react'
import { VisibilityFilters } from '../actions'

import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      <i>All-'haha'</i>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      <i>Active-'hehe'</i>
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed-'hihi'
    </FilterLink>
  </div>
)

export default Footer

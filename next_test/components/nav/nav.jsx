import React, { useEffect } from 'react'

import useStyles from './style'

const Comp = ({children}) => {
  const classes = useStyles()
  return (
    <div className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
      <p className='age'>AGE</p>
      <img src="/static/img/2.jpg" alt='' />
    </div>
  )
}
const App = () => <Comp>Submit</Comp>

export default App

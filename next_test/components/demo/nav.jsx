import React, { useEffect } from 'react'
import Link from 'next/link'

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


/* const Comp = ({ children, ...props }) => {
  console.log(props)
  const classes = useStyles(props)
  return (
    <div className={classes.myButton}>
      <div className={classes.myLabel}>{children}</div>
      <p className='pp'>
        接口
      </p>
    </div>
  )
}
Comp.defaultProps = {
  spacing: 20,
  fontWeight: 'bold',
  labelColor: 'red'
}
const App = () => <Comp fontStyle="italic">Submit</Comp> */



export default App

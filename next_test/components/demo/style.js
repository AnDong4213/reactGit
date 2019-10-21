import { createUseStyles } from "react-jss"

const fs = 30

export default createUseStyles({
  myButton: {
    color: 'green',
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      fontWeight: 'bold',
      backgroundColor: 'purple'
    },
    '& .age': {
      backgroundColor: 'pink',
      fontSize: fs
    },
    '& img': {
      width: 40
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
})


/* export default createUseStyles({
  myButton: {
    padding: props => props.spacing,
    '& p': {
      color: 'green'
    }
  },
  myLabel: props => ({
    display: 'block',
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle
  })
}) */
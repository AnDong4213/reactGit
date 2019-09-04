import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';

function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    setName('灿烂')
  }, [])
  const font = {
    fontSize: 12,
    lineHeight: 1,
    color: 'blue'
  };
  const styles = {
    myDiv: {
      color: 'red',
      margin: {
        top: 25,
        right: 0,
        bottom: 0,
        left: '10rem'
      },
      border: '1px solid blue',
      '& span': {
        fontWeight: 'bold',
        backgroundColor: '#ccc'
      }
    },
    myLabel: {
      fontStyle: 'italic'
    },
    button: {
      extend: font,
      margin: [5, 10],
      transition: [ 'color', 'font-size'],
      transitionDuration: 300,
      background: {
        image: 'url("./favicon.ico")',
        repeat: 'no-repeat',
        position: 'top',
        size: 'cover'
      },
      height: 200,
      width: 200,
      border: [
        [1, 'solid', 'pink']
      ],
      '&:before': {
        content: '"☕"'
      }
    },
    redButton: {
      extend: 'button',
      background: 'linear-gradient(to right, red 0%, green 100%)',
      fontSize: 20,
      fallbacks: {
        background: 'red'
      },
      '&:hover': {
        border: [
          [1, 'solid', 'blue']
        ],
        boxShadow: [
          [0, 0, 0, 10, 'blue'],
          [0, 0, 0, 15, 'green']
        ],
        '& span': {
          color: 'red'
        }
      }
    },
    '@media (min-width: 824px)': {
      button: {
        fontSize: 26
      }
    }

  }

  const Div = ({classes, children}) => (
    <div className={classes.myDiv}>
      <span className={classes.myLabel}>{children}</span>
      <p className={classes.button}>button按钮</p>
      <button className={classes.redButton}>redButton按钮</button>
    </div>
  )
  /* const Div = res => {
    console.log(res);  // {children: "", classes: {…}}
    return (<div className={res.classes.myDiv}>
      <span className={res.classes.myLabel}>{res.children}</span>
    </div>)
  } */

  const StyledDiv = injectSheet(styles)(Div);

  return (
    <div className="App">
      <StyledDiv>
        <i>{name}</i>
      </StyledDiv>
    </div>
  );
}

export default App;

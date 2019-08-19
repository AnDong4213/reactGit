import React, { Component, createContext, lazy, Suspense, PureComponent, memo } from 'react';
import './App.css';

const BatteryContext = createContext(100);
const OnlineContext = createContext();

const About = lazy(() => import(/* webpackChunkName: 'about' */'./About.js'));

class Leaf extends Component {
  /*
  render() {
    return (
      <BatteryContext.Consumer>
        {
          battery => (
            <OnlineContext.Consumer>
              {
                online => <h1>Battery: {battery}, Online: {String(online)}</h1>
              }
            </OnlineContext.Consumer>
          )
        }
      </BatteryContext.Consumer>
    )
  } */

  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    return (
      <h1>Battery: { battery }</h1>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class App extends Component {
  state = {
    battery: 46,
    online: false
  }
  render() {
    const { battery, online } = this.state;
    return (
      <>
        <BatteryContext.Provider value={battery}>
          <OnlineContext.Provider value={online}>
            <button type="button" onClick={() => this.setState({battery: battery - 1})}>
              Press
            </button>
            <button type="button" onClick={() => this.setState({online: !online})}>
              Switch
            </button>
            <Middle />
          </OnlineContext.Provider>
        </BatteryContext.Provider>
      </>
    )
  }
}

class App2 extends Component {
  state = {
    hasError: false
  }
  /* componentDidCatch() {
    this.setState({
      hasError: true
    })
  } */
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>Error</div>
    }
    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About />
        </Suspense>
      </div>
    )
  }
}

/* class Foo extends PureComponent {
  // 改为PureComponent就不用shouldComponentUpdate了，简单的对比...只传入属性本身的对比哟,属性的内部就搞不定了
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.name === this.props.name) {
  //     return false
  //   }
  //   return true
  // }
  render() {
    console.log('render')
    return <div>{this.props.person.age}</div>;
  }
} */

/* function Foo(props) {
  console.log('render')
  return <div>{props.person.age}</div>;
} */

const Foo = memo(props => {
  console.log('render')
  return <div>{props.person.age}</div>;
})

class App3 extends Component {
  state = {
    count: 0,
    person: {
      age: 1
    }
  }
  callback = () => {

  }
  render() {
    const { person } = this.state;
    return (
      <div>
        {/* <button onClick = {() => this.setState({count: this.state.count + 1})}>Add</button> */}
        <button
          onClick = {() => {
            person.age ++;
            this.setState({
              count: this.state.count + 1,
              // person
            })
          }}
        >
          Add
        </button>
        <Foo person={person} cb={this.callback} />
      </div>
    )
  }
}

export default App3;

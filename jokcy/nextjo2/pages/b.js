import React, {
  useState,
  useReducer,
  useContext,
  useLayoutEffect,
  useEffect,
  useRef,
  memo,
  useMemo,
  useCallback,
} from 'react'
import MyContext from './../lib/my-context'
import { Button } from 'antd'

function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function MyCountFunc() {
  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('jokcy')
  const context = useContext(MyContext)

  const countRef = useRef() // { current: '' }
  countRef.current = count

  const childRef = useRef()

  const config = useMemo(() => ({
    text: `count is ${count}`,
    color: count > 3 ? 'red' : 'blue',
  }),[count])

  // const handleButtonClick = useCallback(
  //   () => dispatchCount({ type: 'add' }),
  //   [],
  // )

  const handleButtonClick = useMemo(
    () => () => dispatchCount({ type: 'add' }),
    [])

  const handleAlertButtonClick = function() {
    setTimeout(() => {
      // alert(count)   // 获取不是最新的值
      alert(countRef.current)  // 获取最新的值
    }, 2000)
  }

  const childFunc = () => {
    childRef.current.speak()
  }

  return (
    <div style={{margin: 30}}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Child config={config} onButtonClick={handleButtonClick} />
      <button onClick={handleAlertButtonClick}>alert count</button>
      <h1 onClick={childFunc}>{context}</h1>
      <CTest ref={childRef} handle={handleButtonClick} />
    </div>
  )
}

const Child = memo(({ onButtonClick, config }) => {
  console.log('child render')
  return (
    <button onClick={onButtonClick} style={{ color: config.color }}>
      {config.text}
    </button>
  )
})

class CTest extends React.Component {
  constructor() {
    super()
  }
  state = {
    count: 0
  }
  componentDidMount() {
    // console.log(this.props)
  }
  speak() {
    console.log('this.props')
  }
  addCount() {
    this.props.handle()
    this.setState({
      count: this.state.count + 2
    })
  }
  handleButtonClick() {
    const count = this.state.count
    setTimeout(() => {
      // console.log(count)  // 这样写的话log的就是 0，无论count的值增加
      console.log(this.state.count) // 这样写的话log的就是变化的值
    }, 2000)
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.addCount()}>测试setTimeout</Button>
        <Button onClick={() => this.handleButtonClick()}>ALERT</Button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default MyCountFunc

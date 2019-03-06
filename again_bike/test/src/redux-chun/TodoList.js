import React from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'

import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUi'
const todo = {id: 0, text: "安东", completed: false, he: {a: 'oo'}};
/* let aa = {ww: 'ss',l: 'kk'};
console.log(Object.assign({...todo},aa))
console.log(Object.assign(todo,aa)) */

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    // 订阅了store, store里的数据只要发生改变，subscribe里的函数就会被自动执行
    // store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    axios.get('/api/list.json').then(({status, data: {data}}) => {
      if (status === 200) {
        const action = initListAction(data)
        store.dispatch(action)
      }
    })
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
        {...todo}
      >
        <h3 style={{color: 'red'}}>假按规或紧迫</h3>
      </TodoListUI>
    )
  };
  handleStoreChange = () => {
    this.setState(store.getState())
  };
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  };
  handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  };
  handleItemClick = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

}

export default TodoList;



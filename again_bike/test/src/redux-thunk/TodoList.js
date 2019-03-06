import React from 'react'
import 'antd/dist/antd.css'

import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUi'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅了store, store里的数据只要发生改变，subscribe里的函数就会被自动执行
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {
    const action = getTodoList();
    // console.log(action())  // 把action放在dispatch里面，action会自动执行
    // dispatch发现里面是个函数怎么办，本应该是个对象，所以就运行一下喽...
    store.dispatch(action);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemClick={this.handleItemClick}
      >
        <h3>假按规或紧迫</h3>
      </TodoListUI>
    )
  };
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  };
  handleStoreChange = () => {
    this.setState(store.getState())
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



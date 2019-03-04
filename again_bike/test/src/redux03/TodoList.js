import React from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'

import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators'
import TodoListUI from './TodoListUi'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅了store, store里的数据只要发生改变，subscribe里的函数就会被自动执行
    store.subscribe(this.handleStoreChange)
  }
  componentDidMount() {

    /* axios.get('/list.json').then(({status, data: {data}}) => {
      if (status === 200) {
        const action = initListAction(data)
        store.dispatch(action)
      }
    }) */
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



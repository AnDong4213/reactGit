import React from 'react'
import 'antd/dist/antd.css'
import { Input, List, Button} from 'antd'

import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

const Item = List.Item;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    // 订阅了store, store里的数据只要发生改变，subscribe里的函数就会被自动执行
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{margin: 40}}>
        <Input 
          value={this.state.inputValue} 
          placeholder='todo info' 
          style={{width: 300,marginRight: 20}} 
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List 
          style={{marginTop: 20,width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<Item onClick={() => this.handleItemClick(index)}>{item}</Item>)}
        />
      </div>
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



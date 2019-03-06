import React from 'react'
import { Input, List, Button} from 'antd'
const Item = List.Item;

class TodoListUI extends React.Component {
  componentDidMount() {
    // console.log(this.props)
  }
  render() {
    return (
      <div style={{margin: 40}}>
        <Input 
          value={this.props.inputValue} 
          placeholder='todo info' 
          style={{width: 300,marginRight: 20}} 
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        <List 
          style={{marginTop: 20,width: 300}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<Item onClick={() => this.props.handleItemClick(index)}>{item}</Item>)}
        />
        {this.props.children}
        <i style={{color: 'blue'}}>{this.props.text}</i>
      </div>
    )
  }
}

// 当组件只有一个render函数时，就可以用一个无状态组件来定义这个组件...
/* const TodoListUI = ({inputValue, handleInputChange, handleBtnClick, list, handleItemClick, id, text, children}) => {
  return (
    <div style={{margin: 40}}>
        <Input  
          value={inputValue} 
          placeholder='todo info' 
          style={{width: 300,marginRight: 20}} 
          onChange={handleInputChange}
        />
        <Button type="primary" onClick={handleBtnClick}>提交</Button>
        <List 
          style={{marginTop: 20,width: 300}}
          bordered
          dataSource={list}
          renderItem={(item, index) => (<Item onClick={() => handleItemClick(index)}>{item}</Item>)}
        />
        <i>{text}</i>
        {children}
      </div>
  )
} */

export default TodoListUI;


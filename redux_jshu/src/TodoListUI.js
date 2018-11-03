import React from 'react'
import { Input, Button, List } from 'antd'

// 无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{margin: '30px'}}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item style={{cursor: 'pointer'}} onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI
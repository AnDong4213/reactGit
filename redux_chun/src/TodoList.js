import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from './store'
import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionType'
import { getInputChangeAction } from './store/actionCreators' 
import 'antd/dist/antd.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        console.log(this.state)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleInputChange(e) {
        /* const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        } */
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleBtnClick() {
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div style={{margin: '30px'}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo info'
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item style={{cursor: 'pointer'}} onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}



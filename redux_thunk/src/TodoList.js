import React, { Component } from 'react';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import 'antd/dist/antd.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        // 使用了中间件.......
        const action = getTodoList()
        // console.log(store)
        store.dispatch(action);
        this.setState({
            a: 1
        })
        this.setState({
            a: 2
        })
        setTimeout(() => {
            this.setState({
                a: 3
            })
        })
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        console.log('render')
        return (
            <TodoListUI
                inputValue = {this.state.inputValue}
                list = {this.state.list}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemDelete = {this.handleItemDelete}
            >
                <h3>{this.state.a}</h3>
            </TodoListUI>
        )
    }
}



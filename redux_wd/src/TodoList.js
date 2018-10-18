import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(e) {
        console.log(e.target.value)
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
                    <Button type='primary'>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}



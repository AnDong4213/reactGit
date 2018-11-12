import React, { Component } from 'react';
import { Button, Input } from 'antd';
// import 'antd/dist/antd.css';
import './index.less';

import Child from './Child';
import Child2 from './Child2';

export default class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    /* state = {
        count: 0
    } */

    componentWillMount() {
        console.log('Will--Mount父')
    }
    componentDidMount() {
        console.log('Did--Mount父')
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps + '父')
    }
    shouldComponentUpdate() {
        console.log('should--Update父');
        return true;
    }
    componentWillUpdate() {
        console.log('Will--Update父')
    }
    componentDidUpdate() {
        console.log('Did---Update父')
    }
    componentWillUnmount() {
        console.log('Will--Unmount父')
    }

    handleAdd() {
        this.setState({
            count: this.state.count+1
        })
    }
    handleClick = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        console.log('render父')
        return (
            <div className="content">
                <Input />
                <Button onClick={this.handleAdd.bind(this)}>点击</Button>
                <button onClick={this.handleClick}>点击</button>
                <p>{this.state.count}</p>
                <Child name="看看"></Child>
                <Child2 name={this.state.count}></Child2>
            </div>
        )
    }
}






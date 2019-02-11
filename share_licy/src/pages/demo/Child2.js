import React, { Component } from 'react';

export default class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor--22');
    }

    componentWillMount() {
        console.log('Will--Mount--22')
    }
    componentDidMount() {
        console.log('Did--Mount--22');
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps-2222');
        console.log(newProps)
    }
    shouldComponentUpdate() {
        console.log('should--Update--22');
        return true;
    }
    componentWillUpdate() {
        console.log('Will--Update--22')
    }
    componentDidUpdate() {
        console.log('Did---Update--22')
    }
    componentWillUnmount() {
        console.log('Will--Unmount--22')
    }

    render() {
        console.log('render--22')
        return (
            <div>
                <h3>第二个子组件的生命周期</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }

}
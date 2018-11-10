import React, { Component } from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('Will--Mount11')
    }
    componentDidMount() {
        console.log('Did--Mount11')
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps + '11')
    }
    shouldComponentUpdate() {
        console.log('should--Update11');
        return true;
    }
    componentWillUpdate() {
        console.log('Will--Update11')
    }
    componentDidUpdate() {
        console.log('Did---Update11')
    }
    componentWillUnmount() {
        console.log('Will--Unmount11')
    }

    render() {
        console.log('render11')
        return (
            <div>
                <h3>子组件的生命周期</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }

}
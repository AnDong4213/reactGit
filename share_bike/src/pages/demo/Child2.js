import React, { Component } from 'react';

export default class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount() {
        console.log('Will--Mount22')
    }
    componentDidMount() {
        console.log('Did--Mount22')
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps + '22')
    }
    shouldComponentUpdate() {
        console.log('should--Update22');
        return true;
    }
    componentWillUpdate() {
        console.log('Will--Update22')
    }
    componentDidUpdate() {
        console.log('Did---Update22')
    }
    componentWillUnmount() {
        console.log('Will--Unmount22')
    }

    render() {
        console.log('render22')
        return (
            <div>
                <h3>第二个子组件的生命周期</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }

}
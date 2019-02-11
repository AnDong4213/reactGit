import React, { Component } from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor--11');
    }

    componentWillMount() {
        console.log('Will--Mount--11');
    }
    componentDidMount() {
        console.log('Did--Mount--11');
        this.setState({
          count: 199
        })
    }
    handleClick = () => {
      this.setState({
        count: 565
      })
    }

    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps-1111');
        // this.haha()
        console.log(newProps)
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate-should--Update--11');
        // console.log(this.props);
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate-Will--Update--11')
    }
    componentDidUpdate() {
        // console.log(this.props);
        console.log('componentDidUpdate-Did---Update--11')
    }
    componentWillUnmount() {
        console.log('Will--Unmount--11')
    }
    
    haha() {
      console.log('haha')
    }

    render() {
        console.log('render--11')
        return (
            <div>
                <h3>第一一个子组件的生命周期</h3>
                <button onClick={this.handleClick}>第一个子组件点击</button>
                <p>{this.props.name}</p>
            </div>
        )
    }

}
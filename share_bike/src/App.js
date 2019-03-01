import React, { Component } from 'react';

export default class App extends Component {
  componentDidMount() {
    // console.log(this.props.children);
  }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

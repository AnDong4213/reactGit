import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    componentDidMount() {
        // console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <ul>
                <li><Link to="/main">Main1</Link></li>
                    {/* <li><Link to="/">Main1</Link></li> */}
                    <li><Link to="/about">About1</Link></li>
                    <li><Link to="/topic">Topic1</Link></li>
                    <li><Link to="/imooc1">imooc1</Link></li>
                    <li><Link to="/imooc2">imooc2</Link></li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}












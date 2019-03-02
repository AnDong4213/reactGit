import React from 'react';
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                Main订单<br />
                <Link to="/main/a" style={{color: 'blue', display: 'block'}}>嵌套路由  跳转到a</Link>
                <Link to="/main/b" style={{color: 'pink'}}>嵌套路由  跳转到b</Link>
                <hr />
                { this.props.children }
            </div>
        )
    }
}


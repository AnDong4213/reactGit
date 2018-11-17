import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Link to="/main/a">嵌套路由</Link>
                <i>Main</i>
                {this.props.children}
            </div>
        )
    }
}


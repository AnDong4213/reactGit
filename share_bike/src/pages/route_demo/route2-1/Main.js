import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    componentDidMount() {
        console.log(this.props.children);
        
    }
    render() {
        return (
            <div>
                <p><i>Main</i></p>
                <Link to="/main/a">嵌套路由</Link>
                {this.props.children}
            </div>
        )
    }
}


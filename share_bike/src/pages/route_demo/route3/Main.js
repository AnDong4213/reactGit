import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    componentDidMount() {
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <i>this is Main page</i>
                <br />
                <Link to="/main/test-id">嵌套路由1</Link>
                <br />
                <Link to="/main/456">嵌套路由2</Link>
                <hr />
                {this.props.children}
            </div>
        )
    }
}


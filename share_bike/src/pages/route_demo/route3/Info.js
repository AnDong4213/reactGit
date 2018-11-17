import React from 'react';

export default class Info extends React.Component {
    componentWillMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                我是{this.props.match.params.value}
            </div>
        )
    }
}






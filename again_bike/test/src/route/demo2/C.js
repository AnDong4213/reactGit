import React from 'react';

export default class About extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <p style={{color: 'pink'}}>我是CCCCC哟...</p>
                <p>传参: {this.props.match.params.id}</p>
            </div>
        )
    }
}






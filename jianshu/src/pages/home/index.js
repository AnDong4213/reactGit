import React, { Component } from 'react';
import logoPic from '../../statics/ban.jpg';
import Topic from './components/Topic';
import List from './components/List';
import Write from './components/Write';
import Recommend from './components/Recommend';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src={logoPic} />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Write />
                    <Recommend />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;






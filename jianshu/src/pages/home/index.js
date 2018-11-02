import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
                    <Recommend />
                    <Write />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then(res => {
            let result = res.data.data;
            let action = {
                type: 'change_home_data',
                articleList: result.articleList,
                recommendList: result.recommendList,
                topicList: result.topicList
            }
            this.props.changeHomeData(action);
        })
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action)
    }
})

export default connect(null, mapDispatch)(Home);






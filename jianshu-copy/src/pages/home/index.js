// PureComponent最好与immutable一起使用，否则可能会出现坑... 
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { actionCreateors } from './store';
import logoPic from '../../statics/ban.jpg';
import Topic from './components/Topic';
import List from './components/List';
import Write from './components/Write';
import Recommend from './components/Recommend';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    /* shouldComponentUpdate() {
        return true;
    } */
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
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
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreateors.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreateors.toggleTopShow(true))
        } else {
            dispatch(actionCreateors.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home);






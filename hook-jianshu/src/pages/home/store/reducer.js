import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})
const changeHomeData = (state, action) => {
    return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
    })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_ARTICLE_LIST:
            // return state.set('articleList', state.get('articleList').concat(action.list))
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.nextPage
            })
        case constants.TOGGLE_SHOW_TOP: 
            return state.set('showScroll', action.show)
        default: 
            return state;
    }
}










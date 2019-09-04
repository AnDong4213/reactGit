import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            let result = res.data.data;
            /* let action = {
                type: 'change_home_data',
                articleList: result.articleList,
                recommendList: result.recommendList,
                topicList: result.topicList
            }
            dispatch(action) */
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get(`/api/homeList.json?page=${page}`).then(res => {
            let result = res.data.data;
            dispatch(addHomeList(result, page + 1))
        })
    }
}

/* export const toggleTopShow = (show) => {
    return (dispatch) => {
        dispatch({
            type: constants.TOGGLE_SHOW_TOP,
            show
        })
    }
} */  // 可以不用返回函数，redux返回对象就行...
export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SHOW_TOP,
    show
})



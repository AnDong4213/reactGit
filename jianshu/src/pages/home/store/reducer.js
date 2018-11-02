import { fromJS } from 'immutable';
// import recoPic from '../../../statics/reco.png';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList
            })
        default: 
            return state;
    }
}










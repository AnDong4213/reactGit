import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: '1',
            title: '社会热点',
            imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        },
        {
            id: '2',
            title: '社会热点',
            imgUrl: 'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
        }
    ],
    articleList: [
        {
            id: '1',
            title: '拆书《金字塔原理》，7分钟掌握思考、表达和解决问题的逻辑|必读',
            desc: '本文 4720字，建议阅读时间7分钟 书名《金字塔原理》 豆瓣评分8.1分，小平推荐指数4颗星 推荐理由： 之所以把《金字塔原理》作为我50本拆...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1983586-fffba131fc2e5f3b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        },
        {
            id: '2',
            title: '拆书《金字塔原理》，7分钟掌握思考、表达和解决问题的逻辑|必读',
            desc: '本文 4720字，建议阅读时间7分钟 书名《金字塔原理》 豆瓣评分8.1分，小平推荐指数4颗星 推荐理由： 之所以把《金字塔原理》作为我50本拆...',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/1983586-fffba131fc2e5f3b?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
        }
    ]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}










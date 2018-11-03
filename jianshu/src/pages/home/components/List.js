import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreateors } from '../store';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        // <Link key={index} to='/detail'>
                        // <Link key={index} to={'/detail?id=' + item.get('id')}>
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                <img className='pic' alt='' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    // list: state.get('home').get('articleList')
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        // console.log(dispatch)
        dispatch(actionCreateors.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);


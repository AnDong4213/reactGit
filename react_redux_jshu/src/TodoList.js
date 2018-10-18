import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input onChange={this.props.handleInputChange} value={this.props.inputValue} />
                    <button>提交</button>
                </div>
                <ul>
                    <li>Hello</li>
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    // 这个state指的是store里的数据。store里面数据inputValue把它映射到哪呢，映射到组件的props里面，props里面的哪个位置上呢，就是inputValue这个位置上
    return {
        inputValue: state.inputValue
    }
}
// Dispatch是发布也就是指store.dispatch()，store.dispatch方法被映射(挂载)到props上。
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            let action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        }
    }
}
// connect是连接，是TodoList和store做连接,怎么做连接，有个映射关系就在mapStateToProps里面
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

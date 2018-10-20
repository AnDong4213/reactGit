import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { handleInputChange, handleClick, inputValue, list, handleDelete } = props;
    return (
        <div>
            <div>
                <input onChange={handleInputChange} value={inputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    // 这个state指的是store里的数据。store里面数据inputValue把它映射到哪呢，映射到组件的props里面，props里面的哪个位置上呢，就是inputValue这个位置上
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// 改变store里的内容，就是要调用store的dispatch方法..
// Dispatch是发布也就是指store.dispatch()，store.dispatch方法被映射(挂载)到props上。
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
    }
}
// connect是连接，是TodoList和store做连接,怎么做连接，有个映射关系就在mapStateToProps里面
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// TodoList组件和store进行连接
// TodoList是个UI组件，但是connect方法把组件和业务逻辑相结合，实际返回的是一个容器组件...

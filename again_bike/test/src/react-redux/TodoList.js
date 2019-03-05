import React from 'react'
import { connect } from 'react-redux'

/* class TodoList extends React.Component {
  render() {
    const { inputValue, changeInputValue, handleClick, handleDelete } = this.props;
    return (
      <div style={{margin: 40}}>
        <div>
          <input value={inputValue} onChange={changeInputValue} />
          <button style={{marginLeft: 20}} onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li onClick={() => handleDelete(index)} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
} */

// 无状态组件  和connect结合后就成了容器组件了...
const TodoList = (props) => {
  const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;
  return (
    <div style={{margin: 40}}>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button style={{marginLeft: 20}} onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li onClick={() => handleDelete(index)} key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
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
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'add_del',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



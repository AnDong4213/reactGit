import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
	}

	render() {
		return (
			<Fragment>
				<div style={{margin: 40}}>
					<label htmlFor="insertArea">输入内容: </label>
					<input 
						id="insertArea"
						className='input'
						value={this.state.inputValue}
						ref={(input) => {this.haha = input}}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul ref = {(ul) => {this.ul = ul}}>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				<TodoItem 
					key={index}
					content={item} 
					index={index}
					deleteItem={this.handleItemDelete}
				/>
			)
		})
	}
	// 第二种形式的 setState() 来接受一个函数而不是一个对象。 该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：
	handleInputChange = (e) => {
		// console.log(this.haha)
		const value = e.target.value;
		/* this.setState(() => ({
			inputValue: value
		})); */
		this.setState({
			inputValue: value
		}, () => {
			// console.log('ii')
		})
	}

	handleBtnClick = () => {
		/* this.setState((prevState) => ({
			list: [...prevState.list, prevState.inputValue],
			inputValue: ''
		})); */
		this.setState((prevState) => {
			// console.log(prevState)  // handleInputChange里改变的，给inputValue赋值的
			return {
				list: [...prevState.list, prevState.inputValue],
				inputValue: ''
			}
		}, () => {
			console.log(this.ul.querySelectorAll('div').length)
		});
	}

	handleItemDelete = (index) => {
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list}
		});
	}
}

export default TodoList;

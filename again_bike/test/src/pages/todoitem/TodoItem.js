import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	render() {
		const { content, test }  = this.props;
		return (
			<div style={{color: 'blue'}} onClick={this.handleClick}>
				{test} - {content}
			</div>
		)
	}

	handleClick = () => {
		const { deleteItem, index } = this.props;
		deleteItem(index);
	}
}

TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	// content: PropTypes.string,
	content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}
TodoItem.defaultProps = {
	test: 'Hello'
}

export default TodoItem;
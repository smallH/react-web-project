import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class TodoList extends React.Component {
	static propTypes = {
		filteredTodos: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired).isRequired,
		actions: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {filteredTodos, actions} = this.props
		return(
			<ul styleName="todo-list">
			    {filteredTodos.map(todo =>
			   		<TodoItem key={todo.id} todo={todo} {...actions} />
			    )}
		  	</ul>
		);
	}
}

export default CSSModules(TodoList, styles, {
	allowMultiple: true
});
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class TodoItem extends React.Component {
	static propTypes = {
		todo: PropTypes.object.isRequired,
		editTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		completeTodo: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
	}

	handleDoubleClick = () => {
		this.setState({
			editing: true
		})
	}

	handleSave = (id, text) => {
		if(text.length === 0) {
			this.props.deleteTodo(id)
		} else {
			this.props.editTodo(id, text)
		}
		this.setState({
			editing: false
		})
	}

	render() {
		const {todo, completeTodo, deleteTodo } = this.props
		let element
		if(this.state.editing) {
			element = (
				<TodoTextInput 
					text={todo.text} 
					editing={this.state.editing} 
					onSave={(text) => this.handleSave(todo.id, text)} 
				/>
			)
		} else {
			element = (
				<div styleName="view">
	          		<input styleName="toggle"
		                 type="checkbox"
		                 checked={todo.completed}
		                 onChange={() => completeTodo(todo.id)} 
		            />
	          		<label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
	          		<button styleName="destroy" onClick={() => deleteTodo(todo.id)} />
        		</div>
			)
		}

		return(
			<li styleName={classnames({completed: todo.completed,editing: this.state.editing})}>
        		{element}
      		</li>
		)
	}
}

export default CSSModules(TodoItem, styles, {
	allowMultiple: true
});
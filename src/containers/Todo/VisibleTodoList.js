import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '@/reducers/Todo/actions'
import TodoList from '@/containers/Todo/components/TodoList'
import { getVisibleTodos } from '@/reducers/Todo'

const mapStateToProps = (state, ownProps) => ({
	filteredTodos: getVisibleTodos(state),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
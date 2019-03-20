import { connect } from 'react-redux'
import Header from '@/containers/Todo/components/Header'
import { addTodo } from '@/reducers/Todo/actions'

export default connect(null, {
	addTodo
})(Header)
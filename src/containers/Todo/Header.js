import { connect } from 'react-redux'
import Header from '@/components/Todo/Header'
import { addTodo } from '@/reducers/Todo/actions'

export default connect(null, {
	addTodo
})(Header)
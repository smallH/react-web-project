import React from 'react'
import Header from '@/containers/Todo/Header'
import MainSection from '@/containers/Todo/MainSection'
import UndoRedo from '@/containers/Todo/UndoRedo'

class Todo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return(
			<div className="todo">
				<Header />
	    		<MainSection />
	    		<UndoRedo />
			</div>
		);
	}
}

export default Todo;
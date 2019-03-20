import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '@/containers/Todo/VisibleTodoList'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class MainSection extends React.Component {
	static propTypes = {
		todosCount: PropTypes.number.isRequired,
		completedCount: PropTypes.number.isRequired,
		actions: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			todosCount,
			completedCount,
			actions
		} = this.props;
		// 全选组件
		let checkAllBox;
		if(todosCount > 0) {
			checkAllBox = (
				<span>
		          <input
		            styleName="toggle-all"
		            type="checkbox"
		            checked={completedCount === todosCount}
		            readOnly
		          />
		          <label onClick={actions.completeAllTodos}/>
		        </span>
			);
		} else {
			checkAllBox = null;
		}
		// 过滤组件
		let footerBox;
		if(todosCount > 0) {
			footerBox = (
				<Footer
		          completedCount={completedCount}
		          activeCount={todosCount - completedCount}
		          onClearCompleted={actions.clearCompleted}
		        />
			);
		} else {
			footerBox = null;
		}

		return(
			<section styleName="main">
		      {checkAllBox}
		      <VisibleTodoList />
		      {footerBox}
		    </section>
		);
	}
}

export default CSSModules(MainSection, styles, {
	allowMultiple: true
});
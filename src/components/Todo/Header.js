import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class Header extends React.Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {}
	}

	onSaveHandle = (text) => {
		if(text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render() {
		return(
			<header>
    			<div styleName="header-title">TODOS</div>
    			<div>(为了对比,仅在todos的增删改查实现了撤销重做,在底下的筛选过滤功能没有添加undoable函数)</div>
    			<TodoTextInput onSave={this.onSaveHandle} placeholder="在此处添加您的任务"/>
  			</header>
		);
	}
}

export default CSSModules(Header, styles, {
	allowMultiple: true
});
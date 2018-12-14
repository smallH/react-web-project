import React from 'react';
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	visitor = () => {
		this.props.history.push({
			pathname: '/Home/Welcome'
		})
	}

	manager = () => {
		this.props.history.push({
			pathname: '/Home/Welcome'
		})
	}

	render() {
		return(
			<div id="login" styleName="login">
				<div styleName="title">欢迎使用 react-redux-axios 前端框架</div>
				<div styleName="nav">
					<div styleName="btn" onClick={this.visitor}>游客</div>
					<div styleName="btn manager" onClick={this.manager}>管理员</div>
				</div>
			</div>
		);
	}
}

export default CSSModules(Login, styles, {
	allowMultiple: true
});
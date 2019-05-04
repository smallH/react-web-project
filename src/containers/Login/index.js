import React from 'react';
import styles from './index.styl';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from '@/reducers/Auth/actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
	static propTypes = {
		actions: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	visitor = () => {
		this.props.actions.signIn('');
		this.props.history.push({
			pathname: '/home/welcome'
		});
	}

	manager = () => {
		this.props.actions.signIn('API-TOKEN20181214');
		this.props.history.push({
			pathname: '/home/welcome'
		});
	}

	render() {
		return(
			<div id="login" styleName="login">
				<div styleName="title">欢迎使用 react+axios+redux+cssmodules 前端框架</div>
				<div styleName="nav">
					<div styleName="btn" onClick={this.visitor}>游客</div>
					<div styleName="btn manager" onClick={this.manager}>管理员</div>
				</div>
			</div>
		);
	}
}

// 同样实现propTypes功能
//Login.propTypes = {
// 	actions: PropTypes.object.isRequired
//}

const CSSLogin = CSSModules(Login, styles, {
	allowMultiple: true
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(AllActions, dispatch) // 官方推荐写法，即将 dispatch(this.props.signIn()) 包装成  this.props.actions.signIn()
})

export default connect(null, mapDispatchToProps)(CSSLogin);
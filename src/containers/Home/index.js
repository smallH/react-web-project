import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Welcome from '@/containers/Welcome'
import ShoppingCart from '@/containers/ShoppingCart'
import Todo from '@/containers/Todo'
import styles from './index.styl';
import CSSModules from 'react-css-modules';
import PrivateRoute from '@/components/AuthRoute/PrivateRoute.js'
import AuthRoute from '@/components/AuthRoute'
import NoMatch from '@/containers/NoMatch'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		// 图片引用1：官网推荐，将打包成Base64，webpack打包后找不到图片具体文件     
		//		<img styleName="logo" src={require('./../../assets/img/logo.jpg')} />
		// 图片引用2：资源引用public目录下，webpack打包后可以找到图片具体文件，常用于大量图片文件的项目         
		//		<img styleName="logo" src="assets/logo.jpg" />
		// const TodoRoute = PrivateRoute(Todo, {path:`${this.props.match.path}/Todo`});
		return(
			<div id="core">
				<div styleName="header">
					<img styleName="logo" src="assets/logo.jpg" />
					<div styleName="header-title">react+axios+redux+cssmodules</div>
				</div>
				<div styleName="content">
					<div styleName="tab">
						<div styleName="tabitem">
							<div styleName="tabitem-title">路由列表</div>
							<div styleName="tabitem-mune">
								<ul>
									<li styleName="tabitem-li">
										<NavLink exact to={`${this.props.match.path}/welcome`} styleName="rlink">Welcome(游客)</NavLink>
									</li>
									<li styleName="tabitem-li">
										<NavLink to={`${this.props.match.path}/shoppingcart`} styleName="rlink">ShoppingCart(管理员)</NavLink>
									</li>
									<li styleName="tabitem-li">
										<NavLink to={`${this.props.match.path}/todo`} styleName="rlink">Todos(管理员)</NavLink>
									</li>
									<li styleName="tabitem-li">
										<NavLink to={`${this.props.match.path}/other`} styleName="rlink">NoMatch(没匹配到页面)</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div styleName="view">
						<Switch>
							<Route exact path={`${this.props.match.path}/welcome`} component={Welcome}></Route>
							<AuthRoute path={`${this.props.match.path}/shoppingcart`} component={ShoppingCart}></AuthRoute>
							<AuthRoute path={`${this.props.match.path}/todo`} component={Todo}></AuthRoute>
							<Route component={NoMatch}/>
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Home, styles, {
	allowMultiple: true
});
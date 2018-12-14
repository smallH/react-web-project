import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Welcome from '@/views/Welcome'
import ShoppingCart from '@/views/ShoppingCart'
import Todo from '@/views/Todo'
import styles from './index.styl';
import CSSModules from 'react-css-modules';
import PrivateRoute from '@/components/PrivateRoute'
import AuthRoute from '@/components/AuthRoute'
import NoMatch from '@/components/NoMatch'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		//		const TodoRoute = PrivateRoute(Todo, {path:`${this.props.match.path}/Todo`});
		return(
			<div id="core">
				<div styleName="header">
					<div styleName="header-title">react-redux-axios 前端框架</div>
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
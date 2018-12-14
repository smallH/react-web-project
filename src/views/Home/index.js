import React from 'react';
//import './index.styl';
import { Route, NavLink, Switch, HashRouter } from 'react-router-dom'
import Welcome from '@/views/Welcome'
import ShoppingCart from '@/views/ShoppingCart'
import Todo from '@/views/Todo'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<HashRouter basename="/">
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
											<NavLink exact to={`${this.props.match.path}/Welcome`} styleName="rlink">Welcome(游客)</NavLink>
										</li>
										<li styleName="tabitem-li">
											<NavLink exact to={`${this.props.match.path}/ShoppingCart`} styleName="rlink">ShoppingCart(管理员)</NavLink>
										</li>
										<li styleName="tabitem-li">
											<NavLink exact to={`${this.props.match.path}/Todo`} styleName="rlink">Todos(管理员)</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div styleName="view">
							<Switch>
								<Route exact path={`${this.props.match.path}/Welcome`} component={Welcome}></Route>
								<Route exact path={`${this.props.match.path}/ShoppingCart`} component={ShoppingCart}></Route>
								<Route exact path={`${this.props.match.path}/Todo`} component={Todo}></Route>
							</Switch>
						</div>
					</div>
				</div>
			</HashRouter>
		)
	}
}

export default CSSModules(Home, styles, {
	allowMultiple: true
});
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import Loadable from 'react-loadable';
import styles from './index.styl';
import CSSModules from 'react-css-modules';
import PrivateRoute from '@/components/AuthRoute/PrivateRoute.js'
import AuthRoute from '@/components/AuthRoute'

const MyLoadingComponent = ({
	isLoading,
	error
}) => {
	if(isLoading) {
		return <div>Loading...</div>
	} else if(error) {
		return <div>Sorry, there was a problem loading the page.</div>
	} else {
		return null;
	}
};

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}

		const publicPath = './';
		const publicUrl = publicPath.slice(0, -1);

	}

	render() {
		// 图片引用1：官网推荐，将打包成Base64，webpack打包后找不到图片具体文件     
		//		<img styleName="logo" src={require('./../../assets/img/logo.jpg')} />
		// 图片引用2：资源引用public目录下，webpack打包后可以找到图片具体文件，常用于大量图片文件的项目         
		//		<img styleName="logo" src="assets/logo.jpg" />
		// const TodoRoute = PrivateRoute(Todo, {path:`${this.props.match.path}/Todo`});
		// 图片引用3：允许路径拼接，依然在public目录下，表示为webpack.config.dev.js或webpack.config.prod.js下的publicUrl路径
		//      <img styleName="logo" src={ process.env.PUBLIC_URL + "assets/logo.jpg"} />

		const AsyncHome = Loadable({
			loader: () =>
				import('@/containers/Welcome'),
			loading: MyLoadingComponent
		});

		const AsyncShoppingCart = Loadable({
			loader: () =>
				import('@/containers/ShoppingCart'),
			loading: MyLoadingComponent
		});

		const AsyncTodo = Loadable({
			loader: () =>
				import('@/containers/Todo'),
			loading: MyLoadingComponent
		});

		const AsyncNoMatch = Loadable({
			loader: () =>
				import('@/containers/NoMatch'),
			loading: MyLoadingComponent
		});

		return(
			<div id="core">
				<div styleName="header">
					<img styleName="logo" src={ process.env.PUBLIC_URL + "/assets/logo.jpg"} />
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
							<Route exact path={`${this.props.match.path}/welcome`} component={AsyncHome}></Route>
							<AuthRoute path={`${this.props.match.path}/shoppingcart`} component={AsyncShoppingCart}></AuthRoute>
							<AuthRoute path={`${this.props.match.path}/todo`} component={AsyncTodo}></AuthRoute>
							<Route component={AsyncNoMatch}/>
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
import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter, Redirect } from 'react-router-dom'
import Login from '@/containers/Login'
import Home from '@/containers/Home'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return(
			<BrowserRouter basename="/">
				<Switch>
					<Route exact path="/" render={props => (
						<Redirect
					        to={{
					          pathname: "/login",
					          state: { from: props.location }
					        }}
					    />)}>
					</Route>
					<Route exact path="/login" component={Login}></Route>
					<Route path="/home" component={Home}></Route>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;

//<Route exact path="/" component={Login}></Route>
//等价于,下面这种写法为带参写法，Redirect 表示导航到一个新的位置
//<Route exact path="/" render={props => (
//	<Redirect
//      to={{
//        pathname: "/login",
//        state: { from: props.location }
//      }}
//  />)}>
//</Route>
// 获取参数
// this.props.location.state.from
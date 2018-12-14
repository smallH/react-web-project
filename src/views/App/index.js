import React from 'react';
import { Route, Switch, HashRouter, BrowserRouter, Redirect } from 'react-router-dom'
import Login from '@/views/Login'
import Home from '@/views/Home'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				<BrowserRouter basename="/">
					<div>
						<Switch>
							<Route exact path="/" render={props => (
								<Redirect
						            to={{
						              pathname: "/login",
						              state: { from: props.location }
						            }}
						        />)}></Route>
							<Route exact path="/login" component={Login}></Route>
							<Route path="/home" component={Home}></Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
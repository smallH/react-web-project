import React from 'react';
//import './index.styl';
import { Route, Switch, HashRouter } from 'react-router-dom'
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
				<HashRouter basename="/">
					<div>
						<Switch>
							<Route exact path="/" component={Login}></Route>
							<Route path="/Home" component={Home}></Route>
						</Switch>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
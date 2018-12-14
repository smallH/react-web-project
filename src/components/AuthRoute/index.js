import React from 'react';
import { Route, Redirect,Prompt } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AuthRoute extends React.Component {
	static propTypes = {
		isAuthenticated: PropTypes.string.isRequired
	}
	
	constructor(props) {
		super(props);
		this.state = {};
		
	}
	
	render() {
		const {component,isAuthenticated,...rest} = this.props;
		const Component = component;
		
		// ……使用最新的数据渲染组件
		// 注意此处将已有的props属性传递给原组件
		return(
			<Route 
				{...rest}
				render={
					props => isAuthenticated === "1" ? (<Component {...props} />) :
					    (
					      <div>
					      	<Prompt message="游客身份无权限访问该模块，将自动弹到登录页" />
					        <Redirect
					            to={{
					              pathname: "/",
					              state: { from: props.location }
					            }}
					        />
					      </div>
	        			)
      			}
    		/>
		)
	}
};


const mapStateToProps = (state, ownProps) => ({
	isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(AuthRoute)
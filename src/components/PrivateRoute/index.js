import React from 'react';
import { Route, Redirect,Prompt } from 'react-router-dom'

const PrivateRoute = function(WrappedComponent, rest) {
	// ……返回另一个新组件……
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {};
		}

		render() {
			// ……使用最新的数据渲染组件
			// 注意此处将已有的props属性传递给原组件
			return(
				 <Route
      				{...rest}
				    render={props => true ? (<WrappedComponent {...props} />) : 
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
}

export default PrivateRoute;
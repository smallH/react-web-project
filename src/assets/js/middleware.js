import axios from 'axios'
import { getLocalStorage } from '@/utils/storage';
import { getToken } from '@/reducers/Auth'
import { signIn } from '@/reducers/Auth/actions'

// Axios配置，网络请求时验证token
export const SetAxiosConfig = function(store) {
	let _prefix = '';
	
	// 请求域名
	if(process.env.NODE_ENV === 'production') {
		_prefix = `${process.env.HOST}/api`
	} else {
		_prefix = '/api'
	}
	console.log('process.env:',process.env);
	axios.defaults.baseURL = _prefix;
	
	// 请求超时时间
	axios.defaults.timeout = 10000;

	// 请求拦截，在头部加入token
	axios.interceptors.request.use(
		function(config) {
			let headertoken = '';
			let token = getToken(store.getState());
			if(token) {
				headertoken = token;
			} else if(getLocalStorage('token')) {
				headertoken = getLocalStorage('token');
				store.dispatch(signIn(headertoken));
			}
			if(headertoken) {
				// 存在将token写入请求头部"TOKEN"
				config.headers['TOKEN'] = `${headertoken}`;
			}
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	// 请求结果
	axios.interceptors.response.use(
		function(response) {
		return response;
		}, 
		function(error) {
			if(error.response) {
				switch(error.response.state) {
					case 411:
						// 如411错误为没有token值
						// 返回处理状态和信息的Promise对象
						break;
					case 412:
						// 如412错误为入参不正确
						// 返回处理状态和信息的Promise对象
						break;
					default:
						return Promise.reject(error.response.data)
				}
			}
		}
	);
}
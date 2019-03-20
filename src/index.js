import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '@/containers/App.js';
import store from '@/store'
import '@/assets/styles/base.css'
import '@/assets/fonts/iconfont.css' // 使用方法: <i class="iconfont icon-arrow_left" />
import { SetAxiosConfig } from '@/assets/js/middleware'

// 配置Axios
SetAxiosConfig(store);

render(
	<Provider store={store}>
    	<App />
  	</Provider>, document.getElementById('root')
)
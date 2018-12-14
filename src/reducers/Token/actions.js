import * as types from './actiontypes'

// 设置token
export const setToken = token => ({
	type: types.SET_TOKEN,
	token
})

// 获取token
export const getToken = () => ({
	type: types.GET_TOKEN
})
import * as types from './actiontypes'

// 获取授权
export const signIn = token => ({
	type: types.SIGN_IN,
	token
})

// 取消授权
export const signOut = () => ({
	type: types.SIGN_OUT
})
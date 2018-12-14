import { SIGN_IN, SIGN_OUT } from './actiontypes'
import * as Storage from '@/utils/storage'

const initialState = {
	isAuthenticated: Storage.getLocalStorage("isAuthenticated") ? Storage.getLocalStorage("isAuthenticated") : "0",
	token: Storage.getLocalStorage("token") ? Storage.getLocalStorage("token") : ""
}

const auth = (state = initialState, action) => {
	switch(action.type) {
		case SIGN_IN:
			if(action.token === "") {
				Storage.removeLocalStorage("token")
				Storage.removeLocalStorage("isAuthenticated")
				return { ...state, token: "", isAuthenticated:"0"}
			} else {
				Storage.setLocalStorage("token", action.token)
				Storage.setLocalStorage("isAuthenticated", "1")
				return { ...state, token: action.token, isAuthenticated:"1"}
			}
		case SIGN_OUT:
			Storage.removeLocalStorage("token")
			Storage.removeLocalStorage("isAuthenticated")
			return { ...state, token: "", isAuthenticated:"0"}
		default:
			return state
	}
}

export default auth;

const getTokenFromAuth = state => (state.auth.token)
export const getToken = state => (getTokenFromAuth(state))

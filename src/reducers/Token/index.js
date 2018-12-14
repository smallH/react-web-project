import { SET_TOKEN, GET_TOKEN } from './actiontypes'

// token状态
const token = (state = "", action) => {
	switch(action.type) {
		case SET_TOKEN:
			return action.token
		case GET_TOKEN:
			return state
		default:
			return state
	}
}

export default token;
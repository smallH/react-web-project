import { combineReducers } from 'redux'
import shoppingcart from './ShoppingCart'
import todo from './Todo'
import token from './Token'

export default combineReducers({
	shoppingcart,
	todo,
	token
})


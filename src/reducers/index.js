import { combineReducers } from 'redux'
import shoppingcart from './ShoppingCart'
import todo from './Todo'
import auth from './Auth'

export default combineReducers({
	shoppingcart,
	todo,
	auth
})
import { ADD_TO_CART, CHECKOUT_SUCCESS, CHECKOUT_FAILURE,RECEIVE_PRODUCTS } from './actiontypes'
import { combineReducers } from 'redux'

// 初始化数据
const initialState = {
	addedIds: [],
	quantityById: {}
}

// 购物车里商品ID数组
const addedIds = (state = initialState.addedIds, action) => {
	switch(action.type) {
		case ADD_TO_CART:
			if(state.indexOf(action.productId) !== -1) {
				return state
			}
			return [...state, action.productId]
		default:
			return state
	}
}

// 购物车里指定ID的商品的数量
const quantityById = (state = initialState.quantityById, action) => {
	switch(action.type) {
		case ADD_TO_CART:
			const {productId} = action
			return { ...state,[productId]: (state[productId] || 0) + 1}
		default:
			return state
	}
}

// 购物车数据集合
export const cart = (state = initialState, action) => {
	switch(action.type) {
		case CHECKOUT_SUCCESS:
			// 清空购物车成功
			return initialState
		case CHECKOUT_FAILURE:
			// 清空购物车失败
			return action.cart
		default:
			// 购物车操作
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}


// 库存商品详细信息对象，商品ID值为对象属性
// 如{1: {id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 1}}，是否销售取决于visibleIds
const byId = (state = {}, action) => {
	switch(action.type) {
		case RECEIVE_PRODUCTS:
			// 初始化数据
			return {
				...state,
				...action.products.reduce((obj, product) => {
					obj[product.id] = product
					return obj
				}, {})
			}
		case ADD_TO_CART:
			//检测到ADD_TO_CART添加至购物车，则该商品库存数量减1,
			const {productId} = action
			if(productId) {
				const product = state[productId];
				const updateProduct = {...product,inventory: product.inventory - 1}
				return {...state, [productId]: updateProduct}
			}
			return state
		default:
			return state
	}
}

// 允许对外销售的商品ID数组
const visibleIds = (state = [], action) => {
	switch(action.type) {
		case RECEIVE_PRODUCTS:
			return action.products.map(product => product.id)
		default:
			return state
	}
}

export const products = combineReducers({
	byId,
	visibleIds
})
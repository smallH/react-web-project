import { combineReducers } from 'redux'
import { cart, products} from './reducer'

export default combineReducers({
	cart,
	products
})

const getAddedIds = state => (state.shoppingcart.cart.addedIds)
const getQuantity = (state, id) => (state.shoppingcart.cart.quantityById[id] || 0)
const getProductById = (state, id) => (state.shoppingcart.products.byId[id])
const getProductsVisibleIds = (state) => (state.shoppingcart.products.visibleIds)

// 获取购物车商品总价格 reduce(累加算法(总数，数组对象)，初始值)函数表示遍历数据并累加结果
export const getTotal = state => 
	getAddedIds(state).reduce((total, id) =>total + getProductById(state, id).price * getQuantity(state, id), 0).toFixed(2)

// 获取购物车商品列表
export const getCartProducts = state =>
	getAddedIds(state).map(id => ({...getProductById(state, id),quantity: getQuantity(state, id)}))

// 获取在售的商品列表
export const getVisibleProducts = state => {
	return getProductsVisibleIds(state).map(id => getProductById(state, id))
}
	
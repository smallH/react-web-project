import shop from '@/api/shop'
import * as types from './actiontypes'

// 付款
export const checkout = products => (dispatch, getState) => {
	const {
		cart
	} = getState()
	// 付款请求
	shop.buyProducts(products, () => {
		dispatch({
			type: types.CHECKOUT_SUCCESS,
			cart
		})
		// dispatch({ type: types.CHECKOUT_FAILURE, cart })
	})
}
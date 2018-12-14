import _products from './products.json'
import { _get } from '@/assets/js/http'

const TIMEOUT = 100

export const getNetProducts = () => {
	const url = "/data/products.json"; // http://www.helloui.net/data/products.json
	const query = {}
	return _get({
		url,
		query
	}).then((data) => Promise.resolve(data)).catch((e) => Promise.reject(e));
}

export default {
	getNetProducts: getNetProducts,
	getLocalProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
	buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
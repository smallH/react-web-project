import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '@/reducers'
import { getAllProducts } from '@/reducers/ShoppingCart/Products/actions'

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(getAllProducts());
console.log(store.getState())
export default store;
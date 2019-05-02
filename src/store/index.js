import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from '@/reducers'

const middleware = [thunk, promiseMiddleware, createLogger];
const store = createStore(reducer, applyMiddleware(...middleware));
export default store; 
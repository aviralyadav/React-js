import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
const logger = createLogger();
export default createStore(
	combineReducers({
		math, 
		user
	}),
	{},
	applyMiddleware(logger, thunk)
);

// store.subscribe(()=>{
// 	console.log('updated', store.getState());
// })
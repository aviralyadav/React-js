import { combineReducers } from 'redux';
import messageReducer from '../reducers/messageReducer';
import productReducer from '../reducers/productReducer';

export default combineReducers({
    messageReducer,
    productReducer
});
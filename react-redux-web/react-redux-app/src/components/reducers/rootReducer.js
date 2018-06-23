import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import userReducer from './userReducer';
import listReducer from './listReducer';
import contactReducer from './contactReducer';
 
export default combineReducers({
    flashMessages,
    userReducer,
    list: listReducer,
    contactReducer: contactReducer
});
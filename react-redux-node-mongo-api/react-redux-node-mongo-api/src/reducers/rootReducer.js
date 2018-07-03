import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import productReducer from './productReducer';
import slider from './slider';
import settings from './settings';

export default combineReducers({
    messageReducer,
    productReducer,
    slider,
    settings
});
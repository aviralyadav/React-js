import {SHOW_LIST} from '../types';

const initialState = {
    list: [{Name: 'Aviral', Age: 25},{Name: 'Abhishek', Age: 22}]
}

const list = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_LIST: 
            return {
                ...state, list: action.payload
            }
        default: return state;
    }
}

export default list;
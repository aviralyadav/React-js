import { ADD, RECIEVE_MESSAGE, MESSAGE_FAIL } from '../types';

const INITIAL_STATE = {
    messages: [],
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD: {
            return { 
                ...state, 
                messages: state.messages.concat(action.payload) 
            };
        }
        case RECIEVE_MESSAGE: {
            return {
                ...state,
                messages: action.payload
            };
        }
        case MESSAGE_FAIL: {
            return {
                ...state,
                error: 'Fetching error failed'
            }
        }
        default: {
            return state;
        }
    }
}
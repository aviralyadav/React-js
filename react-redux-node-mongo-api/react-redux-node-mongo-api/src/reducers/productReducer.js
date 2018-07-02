import { PRODUCTS_START, PRODUCTS_SUCCESS, PRODUCTS_FAIL } from '../types';

const initial_state = {
    products: [],
    isLoading: false,
    error: ''
}

export default (state = initial_state, actions) => {
    switch (actions.type) {
        case PRODUCTS_START: {
            return {...state, isLoading: true }
        }
        case PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: actions.payload
            }
        }
        case PRODUCTS_FAIL: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: {
            return state;
        }
    }
}
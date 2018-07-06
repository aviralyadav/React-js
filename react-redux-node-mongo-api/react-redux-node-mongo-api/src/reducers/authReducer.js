import { SET_SIGNUP_PENDING,SET_SIGNUP_SUCCESS,SET_SIGNUP_FAIL } from '../types';

const initial_state = {
    user: '',
    isLoading: false,
    isSignupPending: false,
    isSignupSuccess: false,
    loginError: null
}

export default (state = initial_state, action) => {
    switch (action.type) {
        case SET_SIGNUP_PENDING: 
            return {
                ...state,
                isSignupPending: action.isSignupPending
            };
        case SET_SIGNUP_SUCCESS: 
            return {
                ...state,
                isSignupSuccess: action.isSignupSuccess
                // user: action.payload
            };
        case SET_SIGNUP_FAIL: 
            return {
                ...state,
                loginError: action.loginError
            };
        default: {
            return state
        }
    }
}
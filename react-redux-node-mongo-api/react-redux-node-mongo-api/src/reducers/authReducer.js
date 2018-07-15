import { 
    SET_SIGNUP_PENDING, 
    SET_SIGNUP_SUCCESS, 
    SET_SIGNUP_FAIL, 
    SET_LOGIN_PENDING, 
    SET_LOGIN_SUCCESS, 
    SET_LOGIN_ERROR ,
    SIGNOUT
} from '../types';

const initial_state = {
    user: '',
    isLoading: false,
    isSignupPending: false,
    isSignupSuccess: false,
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null,
    authenticated: ''
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
                isSignupSuccess: action.isSignupSuccess,
                authenticated: action.payload
                // user: action.payload
            };
        case SET_SIGNUP_FAIL:
            return {
                ...state,
                loginError: action.loginError
            };
        case SET_LOGIN_PENDING: 
            return {...state, isLoginPending: action.isLoginPending}; 
        case SET_LOGIN_SUCCESS: 
            return {...state, isLoginSuccess: action.isLoginSuccess, authenticated: action.payload};
        case SET_LOGIN_ERROR: 
            return {...state, loginError: action.loginError}; 
        case SIGNOUT: 
            return {...state, authenticated: action.payload};
        default: {
            return state
        }
    }
}
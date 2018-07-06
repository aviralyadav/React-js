import axios from 'axios';
import { 
    SET_SIGNUP_PENDING, 
    SET_SIGNUP_SUCCESS, 
    SET_SIGNUP_FAIL,
    SET_LOGIN_PENDING,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_ERROR 
} from '../types';

export function onSignupUser(user) {
    return async dispatch => {
        try {
            dispatch(setSignupPending(true));
            dispatch(setSignupSuccess(false));
            dispatch(setSignupFail(null));
    
            await axios.post(`http://localhost:3001/users`, user);

            dispatch(setSignupPending(false));
            dispatch(setSignupSuccess(true));

        } catch (e) {
            dispatch(setSignupPending(false));
            dispatch(setSignupFail('Email or Password is not correct!'));
        }
       
    }
}

const setSignupPending = (isSignupPending) => {
    return {
        type: SET_SIGNUP_PENDING,
        isSignupPending
    }
}

const setSignupSuccess = (isSignupSuccess) => {
    return {
        type: SET_SIGNUP_SUCCESS,
        isSignupSuccess
    }
}

const setSignupFail = (loginError) => {
    return {
        type: SET_SIGNUP_FAIL,
        loginError
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}
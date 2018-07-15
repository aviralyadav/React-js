import axios from 'axios';
import {
    SET_SIGNUP_PENDING,
    SET_SIGNUP_SUCCESS,
    SET_SIGNUP_FAIL,
    SET_LOGIN_PENDING,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_ERROR,
    SIGNOUT
} from '../types';

export const onSignupUser = (user) => async dispatch => {
    try {
        dispatch(setSignupPending(true));
        dispatch(setSignupSuccess(false));
        dispatch(setSignupFail(null));

        const response = await axios.post(`http://localhost:3001/users`, user);
        console.log(response);
        dispatch(setSignupPending(false));
        dispatch(setSignupSuccess(true, response.data.tokens[0].token));
        localStorage.setItem('token', response.data.tokens[0].token);
        
    } catch (e) {
        console.log(e);
        dispatch(setSignupPending(false));
        dispatch(setSignupFail('Email or Password is not correct!'));
    }

};


const setSignupPending = (isSignupPending) => {
    return {
        type: SET_SIGNUP_PENDING,
        isSignupPending
    }
}

const setSignupSuccess = (isSignupSuccess, token) => {
    return {
        type: SET_SIGNUP_SUCCESS,
        isSignupSuccess,
        payload: token
    }
}

const setSignupFail = (loginError) => {
    return {
        type: SET_SIGNUP_FAIL,
        loginError
    }
}

export const onLoginUser = (user) => async dispatch => {
    try {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
        const response = await axios.post(`http://localhost:3001/users/login`, user);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true, response.data.tokens[0].token));
        localStorage.setItem('token', response.data.tokens[0].token);
    } catch(e) {
        dispatch(setLoginPending(false));
        dispatch(setLoginError('Email or password is wrong!'));
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess, token) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess,
        payload: token
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

export const signout = () => {
    localStorage.removeItem('token');
  
    return {
      type: SIGNOUT,
      payload: ''
    };
  };
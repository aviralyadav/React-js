import axios from 'axios';
import { LOGIN_FAILED, LOGIN_START, LOGIN_USER, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED } from '../types';

export function signUpRequest(userData) {
    return dispatch => {
        return axios.post('http://localhost:8080/api/users', userData);
    }
}
export function loginRequest(userData) {
    return dispatch => {
        //return axios.post('http://localhost:8080/api/users', userData);
        dispatch(loginStart());
        axios.post('http://localhost:8080/api/login_user', userData)
        .then(data => {
            console.log(data);
        }, error => {
            console.log(error);
        })
        console.log(userData);
    }
}

export function loginStart() {
    return {
        type: LOGIN_START,
        payload: 'Login Started'
    }
}

export function loginFailed() {
    return {
        type: LOGIN_FAILED,
        payload: 'Login Failed'
    }
}

export function signupStart() {
    return {
        type: SIGNUP_START,
        payload: 'Signup Started'
    }
}

export function signupSuccess(data) {
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}

export function signupFailed(errrs) {
    return {
        type: SIGNUP_FAILED,
        payload: errrs
    }
}
import { LOGIN_FAILED, LOGIN_START, LOGIN_USER, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILED } from '../types';

const INITIAL_STATE = {
    message: '',
    isLoading: false,
    username: '',
    email: '',
    password:'',
    timezone:'',
    confPassword:'',
    errors:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_START: {
            console.log(action.payload);
            return {...state, message: action.payload, isLoading: true}
        };
        case LOGIN_USER: {
            return {...state, data: {}, message:action.payload, isLoading: false}
        };
        case LOGIN_FAILED: {
            return {...state, message:action.payload, isLoading: false}
        };
        case SIGNUP_START: {
            //console.log(action.payload);
            return {...state, message: action.payload, isLoading: true}
        };
        case SIGNUP_SUCCESS: {
            console.log(...state,action.payload);
            return {...state, data: action.payload, message: 'Signed In', isLoading: false}
        };
        case SIGNUP_FAILED: {
            //console.log(action.payload);
            return {...state, message:action.payload, isLoading: false}
        };
        default: return state;
    }
}
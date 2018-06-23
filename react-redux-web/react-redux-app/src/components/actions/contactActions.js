import { CONTACT_FORM_SEND_START, CONTACT_FORM_SEND_SUCCESS, CONTACT_FORM_SEND_FAILED } from '../types';
import { flashMessages } from './flashActions';
import axios from 'axios';

export function sendContactForm (formData) {
    return dispatch => {
        dispatch(contactFormStart());
        console.log('start form', formData);
        axios.post('http://localhost:8080/api/contact_form', formData)
        .then(
            (data)=>{
                console.log(data);
                if(data.success == true){
                    dispatch(contactFormSuccess(data));
                    
                }
                
            },
            (error)=>{
                dispatch(contactFormFailed());
            });
    }
}

function contactFormStart () {
    return {
        type: 'CONTACT_FORM_SEND_START'
    }
}

function contactFormSuccess (data) {
    return {
        type: 'CONTACT_FORM_SEND_SUCCESS',
        payload: data
    }
}

function contactFormFailed () {
    return {
        type: 'CONTACT_FORM_SEND_FAILED'
    }
}
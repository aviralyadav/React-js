import { CONTACT_FORM_SEND_FAILED, CONTACT_FORM_SEND_START, CONTACT_FORM_SEND_SUCCESS } from '../types';

const initialState = {
    isLoading: true,
    message: '',
    data: []
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case CONTACT_FORM_SEND_START : 
            console.log('start reducer');
            return { ...state, isLoading: false, message: 'Contact form start' };
        
        case CONTACT_FORM_SEND_SUCCESS : 
            return { ...state, isLoading: false, data: actions.payload, message: 'Sent successfully' };
        
        case CONTACT_FORM_SEND_FAILED : 
            return { ...state, isLoading: false, message: 'Contact form failed' };
        
        default : 
            return state;
        
    }
}
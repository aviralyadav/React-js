import { RECIEVE_MESSAGE, MESSAGE_FAIL } from '../types';
import axios from 'axios';

export function addMessage (message) {
    return async dispatch => {
        axios.post(`http://localhost:3001/messages`, {message})
            .then(res=>{
                console.log(res);
                dispatch(getMessages());
            })
            .catch(err=>{
                console.log(err);
            });
        // type: ADD,
        // payload: message
    }
}

export function getMessages () {
    console.log('get message');
    return async dispatch => {
        axios.get(`http://localhost:3001/messages`)
            .then(messages=>{
                dispatch(receiveMessages(messages.data));
            })
            .catch(err=>{
                dispatch(messageFails());
            });
    }
}

function receiveMessages (msgs) {
    return {
        type: RECIEVE_MESSAGE,
        payload: msgs
    }
}

function messageFails () {
    return {
        type: MESSAGE_FAIL
    }
}
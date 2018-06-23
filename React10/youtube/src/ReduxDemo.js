import React, { Component } from 'react'
import {createStore} from 'redux';

export default class ReduxDemo extends Component {
    
    
    render() {
     
        ////step 2 - create reducer : state, action
     const reducer = function(state, action){
        if(action.type === 'Attack'){
            return action.payload
        }
        return state;
    }
    
        //// step1- create store : reducer and state
    const store = createStore(reducer, "Avi");
    
    ////step 3 - subscribe to base
    store.subscribe(()=>{
        console.log("Store is now", store.getState());
    })

    //// step 4 - dispatch action
    store.dispatch({type:'Attack', payload: 'Superman'});

        return (
            <div>
                Test
            </div>
        )
    }
}

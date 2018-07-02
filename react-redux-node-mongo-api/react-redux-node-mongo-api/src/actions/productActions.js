import axios from 'axios';
import { PRODUCTS_START, PRODUCTS_SUCCESS, PRODUCTS_FAIL } from '../types';

export function getAllProducts (products) {
    return dispatch => {
        dispatch(getProductsStart());
        axios.get(`http://localhost:3001/products`)
        .then(products => {
            dispatch(productSuccess(products.data));
        })
        .catch(err=>{
            dispatch(productsFail());
        })
    }
}

function productSuccess (products) {
    return {
        type: PRODUCTS_SUCCESS,
        payload: products
    }
}

function getProductsStart () {
    return {
        type: PRODUCTS_START
    }
}

function productsFail () {
    return {
        type: PRODUCTS_FAIL
    }
}




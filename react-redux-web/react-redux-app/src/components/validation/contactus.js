import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
    if(validator.isEmpty(data.name)){
        errors.name = 'Name is required';
    }
    if(validator.isEmpty(data.mobile)){
        errors.mobile = 'Mobile is required';
    }
    if(!validator.isNumeric(data.mobile)){
        errors.mobile = 'Mobile is not valid';
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is not valid';
    }
    if(validator.isEmpty(data.message)){
        errors.message = 'Message is required';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
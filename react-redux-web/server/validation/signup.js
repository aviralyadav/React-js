var validator = require('validator');
var isEmpty = require('lodash/isEmpty');
exports.index = function validateInput(data) {
    var errors = {};

    if(validator.isEmpty(data.username)) {
        errors.username = 'This field is required';
    }
    if(validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if(!validator.isEmail(data.email)) {
        errors.email = 'This email is not valid';
    }
    if(validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if(validator.isEmpty(data.confPassword)) {
        errors.confPassword = 'This field is required';
    }
    if(!validator.equals(data.password, data.confPassword)) {
        errors.confPassword = 'Confirm Password and Password does not same';
    }
    if(validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};
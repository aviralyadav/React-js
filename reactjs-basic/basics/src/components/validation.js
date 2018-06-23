import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(user) {
	let errors = {};
	if(validator.isEmpty(user.username)){
		errors.username = 'Username is required.';
	}
	if(validator.isEmpty(user.password)){
		errors.password = 'Password is required.';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	}	
}
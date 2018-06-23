import React from 'react';
import TextFieldGroup from './TextFieldGroup';
import validateInput from './validation/login';
import {loginRequest} from './actions/userActions';

class LoginForm extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            errors:''
        }
    this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if(!isValid) {
            this.setState({
                errors
            });
        }
        return isValid;
    }
    loginUser(e) {
        e.preventDefault();
        //this.props.loginStart();
        if(this.isValid()){
        	this.props.loginRequest(this.state);
            console.log(this.state);
            console.log(this.props.isLoading, this.props.message);
        }
    }
	render(){
		const { errors } = this.state;
		return(
			<div>
				<form onSubmit={this.loginUser.bind(this)}>
                        <h2>Logn in</h2>
                        <TextFieldGroup 
                            type="text"
                            field="username"
                            label="Username"
                            onChange={this.onChange}
                            value={this.state.username}
                            error={errors.username}
                        />
                        <TextFieldGroup 
                            type="password"
                            field="password"
                            label="Password"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                        />
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
			</div>
		);
	}
}

export default LoginForm;

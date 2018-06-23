import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import timezones from './Timezones';
import validateInput from './validation/signup';
import TextFieldGroup from './TextFieldGroup';
//import { browserHistory } from 'react-router';
import '../App.css';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confPassword: '',
            timezone: '',
            errors: '',
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.signUp = this.signUp.bind(this);
        
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }
    signUp(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.signupStart();
            this.props.signUpRequest(this.state).then(
               ({data}) => {
                    if(data.success===true){
                        //console.log(this.props.flashMessages);
                        this.props.flashMessages({
                            type: 'success',
                            text: 'User signup successfully, Welcome!'
                        });
                        this.props.signupSuccess(data);
                        this.context.router.history.push('/');
                        //this.setState({});
                    } else {
                        this.props.signupFailed({errors: data});
                        //this.setState({ errors: data, isLoading: false });
                    }
                    
                }
            )
         }
    }
    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) => 
            <option key={key} value={val} >{key}</option>
        );
        return (
            <form onSubmit={this.signUp}>
                <h1>Sign up</h1>
                <TextFieldGroup 
                    field="username"
                    onChange={this.onChange}
                    value={this.state.username}
                    error={errors.username}
                    label="Username"
                />
                <TextFieldGroup 
                    field="email"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    label="Email"
                />
                <TextFieldGroup 
                    field="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    label="Password"
                    type="password"
                />
                <TextFieldGroup 
                    field="confPassword"
                    onChange={this.onChange}
                    value={this.state.confPassword}
                    error={errors.confPassword}
                    label="Confirm Password"
                    type="password"
                />
                <div className={classnames("form-group", {"has-error": errors.timezone})}>
                    <label className="control-label">Timezone</label>
                    <select 
                        name="timezone"
                        className="form-control"
                        value={this.state.timezone}
                        onChange={this.onChange}
                    >
                    
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                    </select>
                    {errors.timezone && <span className="help-block" style={{color: '#a94442'}}>{errors.timezone}</span>}
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up</button>
                </div>
            </form>
            
        );

    }
}

SignupForm.propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    flashMessages: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;
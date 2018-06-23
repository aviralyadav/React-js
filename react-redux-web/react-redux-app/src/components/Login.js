import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginStart,loginRequest,loginFailed } from './actions/userActions';
import { flashMessages } from './actions/flashActions';
import LoginForm from './LoginForm';

class Login extends Component {
    
    render() {
        const {loginFailed,loginRequest,loginStart} = this.props;
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm 
                        loginStart={loginStart}
                        loginRequest={loginRequest}
                        loginFailed={loginFailed}
                        message={this.props.message}
                        isLoading={this.props.isLoading}
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        message: state.userReducer.message,
        isLoading: state.userReducer.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginFailed: () => dispatch(loginFailed()),
        loginStart: () => dispatch(loginStart()),
        loginRequest: (data) => dispatch(loginRequest(data))
    };
};  

export default connect(mapStateToProps, mapDispatchToProps)(Login);

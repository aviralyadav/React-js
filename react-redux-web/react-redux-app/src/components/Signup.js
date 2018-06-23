import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signUpRequest, signupStart, signupFailed, signupSuccess } from './actions/userActions';
import { flashMessages } from './actions/flashActions';

class Signup extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const { signUpRequest, flashMessages, signupStart, signupFailed, signupSuccess} = this.props;
        console.log(this.props);
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm 
                        signUpRequest = {signUpRequest}
                        flashMessages = {flashMessages}
                        signupStart = {signupStart}
                        signupFailed = {signupFailed}
                        signupSuccess = {signupSuccess}
                    />
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    flashMessages: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    const { username, email, password, confPassword, timezone } = state.userReducer;
   // const { flashMessages } = state.flashReducer;
    return {
        username, email, password, confPassword, timezone
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpRequest: (data) => dispatch(signUpRequest(data)), 
        flashMessages: (data) => dispatch(flashMessages(data)), 
        signupStart: () => dispatch(signupStart()), 
        signupFailed: () => dispatch(signupFailed()), 
        signupSuccess: (data) => dispatch(signupSuccess(data))
    }
}

//{ signUpRequest, flashMessages, signupStart, signupFailed, signupSuccess }

export default connect(null, mapDispatchToProps)(Signup);
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createBrowserHistory } from 'history';

import {onSignupUser} from '../../../actions/authActions';
const history = createBrowserHistory();

class Signup extends Component {
    state = {
        email: '',
        password: ''
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onSignup = async (e) => {
        e.preventDefault();
         await this.props.onSignupUser(this.state);
         if(this.props.isSignupSuccess) {
            this.props.history.push('/dashboard');
         }
    };
    render() {
        const { isSignupPending, isSignupSuccess, loginError } = this.props;
        
        return (
            <div>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ 'backgroundImage': "url('images/products/bg-01.jpg')" }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        Register
		            </h2>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2" style={{minHeight: '358px'}}>
                            <form style={{padding: '5%'}} onSubmit={this.onSignup}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" onChange={this.onChangeHandler} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" onChange={this.onChangeHandler} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Signup</button>
                                <br/>
                                {isSignupPending && <div>Please wait...</div>}
                                {isSignupSuccess && <div>Welcome Back</div>}
                                {loginError && <div>{loginError}</div>}
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignupPending: state.authReducer.isSignupPending,
        isSignupSuccess: state.authReducer.isSignupSuccess,
        loginError: state.authReducer.loginError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignupUser: (usr) => dispatch(onSignupUser(usr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
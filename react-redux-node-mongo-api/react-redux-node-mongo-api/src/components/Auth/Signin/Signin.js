import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { createBrowserHistory } from 'history';

import {onLoginUser} from '../../../actions/authActions';
import {getErrorState, getLoginSuccessState, getLoginPendingState} from '../Selectors/AuthSelector';
// const history = createBrowserHistory();

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    onLogin = async (e) => {
        e.preventDefault();
         await this.props.onLoginUser(this.state);
         if(this.props.isLoginSuccess) {
            this.props.history.push('/dashboard');
         }
    };
    render() {
        const { isLoginPending, isLoginSuccess, loginError } = this.props;
        
        return (
            <div>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ 'backgroundImage': "url('images/products/bg-01.jpg')" }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        Login
		            </h2>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2" style={{minHeight: '358px'}}>
                            <form style={{padding: '5%'}} onSubmit={this.onLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" onChange={this.onChangeHandler} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" onChange={this.onChangeHandler} className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <br/>
                                {isLoginPending && <div>Please wait...</div>}
                                {isLoginSuccess && <div>Welcome Back</div>}
                                {loginError && <div>{loginError}</div>}
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state);
    return {
        isLoginPending: getLoginPendingState(state),
        isLoginSuccess: getLoginSuccessState(state),
        loginError: getErrorState(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginUser: (usr) => dispatch(onLoginUser(usr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
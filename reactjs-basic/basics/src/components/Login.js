import React from 'react';
//import {Redirect} from 'react-router-dom';
import axios from 'axios';
import '../Login.css';
import validateInput from './validation';
//import Home from './Home';
import {HOST} from './Constants';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: '',
            errmsg: ''
        }
        this.onLogin = this.onLogin.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.isValid = this.isValid.bind(this);
    }
    componentWillMount() {
        if(window.sessionStorage.getItem('token') === '' || window.sessionStorage.getItem('token') === null) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/home');
        }
    }
    onChangeInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if(!isValid) {
            this.setState({
                errors
            })
        }
        return isValid;
    }
    onLogin(evt) {
        evt.preventDefault();
        //console.log(this.state);
        if(this.isValid()){
            this.setState({
                errors: {}
            })
            const credentials = {
                user: this.state.username,
                password: this.state.password
            };
           axios.post(`${HOST}/api/user/login`, credentials)
            .then(function(user) {
                //console.log(user);
                if(user.status !== 200){
                    console.log('false',user);
                    this.setState({errmsg: user.statusText});
                } else {
                    //console.log(user);
                    this.setState({errmsg:''});
                    window.sessionStorage.setItem("token", user.statusText);
                    this.props.history.push('/home');
                     //this.context.router.push('/home');
                }
            }.bind(this))
            .catch(function(err){
                //console.log(err);
            }); 
        }
        
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="container login">
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <div className="panel panel-login">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-12">
                                <a className="active" id="login-form-link">Admin Login</a>
                            </div>
                       
                        </div>
                        <hr/>
                         <h4 className="h4Color text-center">{this.state.errmsg}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="login-form" onSubmit={this.onLogin}>
                                    <div className="form-group">
                                        <input type="text" name="username" id="username" tabIndex="1" className="form-control" onChange={this.onChangeInput} value={this.state.username} placeholder="Username" />
                                    </div>
                                    <h4 className="h4Color text-center">{this.state.errors.username}</h4>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password" tabIndex="2" className="form-control" onChange={this.onChangeInput} value={this.state.password} placeholder="Password" />
                                    </div>
                                    <h4 className="h4Color text-center">{errors.password}</h4>
                                    <div className="form-group text-center">
                                        <input type="checkbox" tabIndex="3" className="" name="remember" id="remember" />
                                        <label htmlFor="remember"> Remember Me</label>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
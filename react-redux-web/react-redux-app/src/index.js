import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import Signup from './components/Signup';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import './App.css';
import rootReducer from './components/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <NavLink className="navbar-brand" to="#">React-Redux </NavLink>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeClassName="activeNav" exact to={"/"}>Home</NavLink></li>
                                <li><NavLink activeClassName="activeNav" to={"/signup"}>Sign up</NavLink></li>
                                <li><NavLink activeClassName="activeNav" to={"/contactus"}>Contact US</NavLink></li>
                                <li><NavLink activeClassName="activeNav" to={"/login"}>Log in</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Route exact path={"/"} component={App} />
                <Route path={"/signup"} component={Signup} />
                <Route path={"/login"} component={Login} />
                <Route path={"/contactus"} component={ContactUs} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));


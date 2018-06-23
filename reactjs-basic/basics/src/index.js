import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  //NavLink
} from 'react-router-dom';
import './index.css';
//import { Contact } from './components/Contact';
import ContactUs from './components/ContactUs';
//import { User } from './components/User';
import Login from './components/Login';
import Home from './components/Home';
import Driver from './components/Driver';
import Owner from './components/Owner';
import Settings from './components/Settings';
import './App.css';
//import App from './App';
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory();

 ReactDOM.render(
  
    <Router>
        <div className="container">
        <Route exact path={"/"} component={Login}/>
        <Route path={"/home"} component={Home}/>
        <Route path={"/drivers"} component={Driver}/>
        <Route path={"/owners"} component={Owner}/>
        <Route path={"/contactus"} component={ContactUs}/>
        <Route path={"/settings"} component={Settings}/>
        </div>
    </Router>
, window.document.getElementById('root'));

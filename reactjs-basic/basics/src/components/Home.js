import React from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  // NavLink
} from 'react-router-dom';
//import DriverList from './DriverList';
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import Menus from './Menu';

export default class Home extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	drivers: []
	  };
	  this.logout = this.logout.bind(this);
	  //this.getDrivers = this.getDrivers.bind(this);
	}
	componentWillMount() {
        if(window.sessionStorage.getItem('token') === '' || window.sessionStorage.getItem('token') === null) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/home');
        }
    }
	logout() {
		sessionStorage.removeItem('token');
		this.props.history.push('/');
	}
   render() {
        return (
            <div className="container">
            	<Menus logout={this.logout} />
                <h2>Home</h2>

            </div>
        );
    }
}

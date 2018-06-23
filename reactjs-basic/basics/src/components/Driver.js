import React from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  // NavLink
} from 'react-router-dom';
import DriverList from './DriverList';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Menus from './Menu';
import {HOST} from './Constants';

export default class Driver extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	drivers: []
	  };
	  this.logout = this.logout.bind(this);
	  this.getDrivers = this.getDrivers.bind(this);
	}
	logout() {
		sessionStorage.removeItem('token');
		this.props.history.push('/');
	}
	componentWillMount() {
        if(window.sessionStorage.getItem('token') === '' || window.sessionStorage.getItem('token') === null) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/drivers');
        }
    }
	componentDidMount() {
		this.getDrivers();
	}
	getDrivers() {
		axios.get(`${HOST}/api/admin/getAdminDriverList`)
		.then(function(drivers) {
			// console.log(drivers.data);
			this.setState({drivers: drivers.data});
		}.bind(this))
		.catch(function(err){
			console.log(err);
		});
	}
	changeStatus(id, status){
		var body = {
			_id: id,
			role: 'driver',
			status: !status
		}
		//console.log(body);
		axios.put(`${HOST}/api/admin/updateActivationStatus`, body)
			.then(function(drivers) {
				this.getDrivers();
			}.bind(this))
			.catch(function(err){
				console.log(err);
			});
	}
	removeDriver(id) {
		console.log(id);
		axios.delete(`${HOST}/api/admin/deleteUser`, {_id: id, role: 'driver'})
			.then(function(drivers) {
				this.getDrivers();
			}.bind(this))
			.catch(function(err){
				console.log(err);
			});
	}
   render() {
        return (
            <div className="container">
                <Menus logout={this.logout} />

                <div>
                <h2>Drivers</h2>
                
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   this.state.drivers.map((driver, index)=>{
                                return (<DriverList 
                                    driverList={driver}
                                    changeStatus={this.changeStatus.bind(this)}
                                    removeDriver={this.removeDriver.bind(this)}
                                    index={index}
                                    key ={index}
                                   
                                />);
                            })
                            }
                            
                        
                    </tbody> 
                    
                </table>
               
            </div>

            </div>
        );
    }
}

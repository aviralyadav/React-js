import React from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  // NavLink
} from 'react-router-dom';
import OwnerList from './OwnerList';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Menus from './Menu';
import {HOST} from './Constants';

export default class Owner extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	owners: []
	  };
	  this.logout = this.logout.bind(this);
	  this.getOwners = this.getOwners.bind(this);
	}
	logout() {
		sessionStorage.removeItem('token');
		this.props.history.push('/');
	}
	componentWillMount() {
        if(window.sessionStorage.getItem('token') === '' || window.sessionStorage.getItem('token') === null) {
            this.props.history.push('/');
        } else {
            this.props.history.push('/owners');
        }
    }
	componentDidMount() {
		this.getOwners();
	}
	getOwners() {
		axios.get(`${HOST}/api/admin/getAdminOwnerList`)
		.then(function(owners) {
			//console.log(owners);
			this.setState({owners: owners.data});
		}.bind(this))
		.catch(function(err){
			console.log(err);
		});
	}
	changeStatus(id, status){
		var body = {
			_id: id,
			role: 'owner',
			status: !status,
		}
		axios.put(`${HOST}/api/admin/updateActivationStatus`, body)
			.then(function(owners) {
				this.getOwners();
			}.bind(this))
			.catch(function(err){
				console.log(err);
			});
	}
	removeOwner(id) {
		console.log(id);
		var body = {
			_id: id, 
			role: 'owner'
		}
		console.log(body);
		axios.delete(`${HOST}/api/admin/deleteUser`, body)
			.then(function(owners) {
				this.getOwners();
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
                <h2>Owners</h2>
                
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Mobile</th>
                            
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   this.state.owners.map((owner, index)=>{
                                return (<OwnerList 
                                    ownerList={owner}
                                    distance={owner.vechicles.distance}
                                    changeStatus={this.changeStatus.bind(this)}
                                    removeOwner={this.removeOwner.bind(this)}
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

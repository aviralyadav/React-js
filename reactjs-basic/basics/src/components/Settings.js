import React from 'react';
import {
  //BrowserRouter as Router,
  //Route,
  // NavLink
} from 'react-router-dom';
//import DriverList from './DriverList';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Menus from './Menu';
import {HOST} from './Constants';

export default class Settings extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	 disType: null
	  };
	  this.logout = this.logout.bind(this);
	  this.saveSetting = this.saveSetting.bind(this);
      this.getSettings = this.getSettings.bind(this);
	}

    getSettings(){
        axios.get(HOST+'/api/admin/getSettings')
        .then(setting => {
            //console.log(setting.data);
            this.setState({ disType: setting.data.distanceType }, () => console.log(this.state));
        });
        //console.log(this.state.disType);
    }

	componentWillMount() {
        this.getSettings();    
    }

        
    saveSetting(e){
        e.preventDefault();
        console.log(this.state.disType);
        axios.put(HOST+'/api/admin/updateSettings', {distType: this.state.disType})
        .then(function(data) {
            console.log(data);
        })
    }
    changeSetting(event){
        
        this.setState({
            disType: event.target.value
        })
        //console.log(this.state.disType);
    }
	logout() {
		sessionStorage.removeItem('token');
		this.props.history.push('/');
	}
    renderComponent() {
        return(<div className="container">
                <Menus logout={this.logout} />
                <h3 style={{textAlign: 'center'}}>Settings </h3>
                <div className="form-group">
                    <label htmlFor="distance" className="col-md-8 control-label">Distance:</label>
                    <div className="col-md-4">
                    <select className="form-control inputstl" value={this.state.disType} onChange={this.changeSetting.bind(this)}>
                    <option value="miles">Miles</option>
                    <option value="km">KM</option>
                    </select>          
                    
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                    <div className="col-md-2">
                    <button type="submit" onClick={this.saveSetting} className="btn btn-lg btn-block btn-info">Save Setting</button>
                    </div>
                    <div className="col-md-10"></div>
                    </div>
                </div>      

            </div>
            );
    }
   render() {
        //console.log(this.state.disType);
        return (
            <div>
            {
                this.state.disType === null ? <div className="container"> <Menus logout={this.logout} />
                Please wait, loading...</div> : this.renderComponent()
            }
            </div>
        );
    }
}
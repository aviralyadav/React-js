import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
   NavLink
} from 'react-router-dom';
// import { Link } from 'react-router-dom';

class Menus extends Component {
	logout(){
		this.props.logout();
	}
  render() {
    return (
      <div>
		      <nav className="navbar navbar-default">
		                <div className="container-fluid">
		                    <div className="navbar-header">
		                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                        <span className="sr-only">Toggle navigation</span>
		                        <span className="icon-bar"></span>
		                        <span className="icon-bar"></span>
		                        <span className="icon-bar"></span>
		                    </button>
		                    <NavLink className="navbar-brand" to="#"><img alt="" src={"http://s.cdpn.io/3/kiwi.svg"} className="App App-logo"/> 
		                    </NavLink>
		                    </div>
		                    <div id="navbar" className="navbar-collapse collapse">
		                    <ul className="nav navbar-nav">
		                        <li><NavLink activeClassName="activeNav" exact to={"/home"}>Home</NavLink></li>
		                        <li><NavLink activeClassName="activeNav" to={"/drivers"}>Drivers</NavLink></li>
		                        <li><NavLink activeClassName="activeNav" to={"/owners"}>Owners</NavLink></li>
		                        <li><NavLink activeClassName="activeNav" to={"/settings"}>Settings</NavLink></li>
		                        <li><NavLink activeClassName="activeNav" to={"#"} >
		                        <div onClick={this.logout.bind(this)}>Logout</div></NavLink>
		                        </li> 
		                    </ul>
		                    </div>
		                </div>
                </nav>
      </div>
    );
  }
}

export default Menus;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">React Redux</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><NavLink exact to='/'>Home</NavLink></li>
              <li><NavLink to='/signup'>Sign up</NavLink></li>
              <li><NavLink to='/'>Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}

export default NavigationBar;
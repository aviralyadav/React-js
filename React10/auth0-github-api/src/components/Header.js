import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Auth from '../Auth';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    
    login() {
        const auth = new Auth();
        auth.login();
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>Github Searcher</Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.login}>Login</NavItem>
                </Nav>                
            </Navbar>
        )
    }
}

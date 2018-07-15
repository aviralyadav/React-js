import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import { signout } from '../../actions/authActions';

class Header extends Component {
    state = {
        currentTime: '',
        intervalId: '',
        token: ''
    }

    componentDidMount() {
        // this.checkToken();
        var intervalId = setInterval(this.timer, 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({ intervalId: intervalId });
    }

    signout  = () => {
        this.props.signout();
         //this.props.history.push('/');
    }


    timer = () => {
        // setState method is used to update the state
        const dateTime = new Date()
        const formattedDT = Moment(dateTime).format('LTS')//20 Mart 2017
        this.setState({ currentTime: formattedDT });
    }

    render() {

        return (
            <header>
                <div className="container-menu-desktop">

                    <div className="wrap-menu-desktop" style={{ top: 0 }}>
                        <nav className="limiter-menu-desktop container">

                            <Link to="/" className="logo">
                                <h3>HAMARA STORE</h3>
                                {/* <img src="images/icons/logo-01.png" alt="IMG-LOGO" /> */}
                            </Link>

                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li className="active-menu">
                                        <Link to="/">Home</Link>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Homepage 1</a></li>
                                            <li><a href="home-02.html">Homepage 2</a></li>
                                            <li><a href="home-03.html">Homepage 3</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>

                                    <li className="label1" data-label1="hot">
                                        <Link to="/">Features</Link>
                                    </li>

                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>

                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    {localStorage.getItem('token') ?
                                        <li>
                                            <Link to="" onClick={this.signout}>Sign Out</Link>
                                        </li> : null}
                                    {localStorage.getItem('token') ? null :
                                        <li>
                                            <Link to="/signup">Sign Up</Link>
                                        </li>}
                                    {localStorage.getItem('token') ? null :
                                        <li>
                                            <Link to="/signin">Sign In</Link>
                                        </li>}
                                </ul>
                            </div>


                        </nav>
                    </div>
                </div>


                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="images/icons/icon-close2.png" alt="CLOSE" />
                        </button>

                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..." />
                        </form>

                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authReducer.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch(signout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
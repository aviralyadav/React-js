import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import User from '../User';
import { connect } from 'react-redux';
import { setName, setAddress, getUsers } from '../actions/userActions';

class App extends Component {
  componentWillMount() {
    this.props.user;
    console.log(this.props.user);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <User name={this.props.user.name} />
          <button onClick={()=>this.props.setName("anu")}>Change Name</button>
        </p>
        <p className="App-intro">
          <h3>{this.props.user.address} </h3>
          <button onClick={()=>this.props.setAddress("Delhi")}>Change Address</button>
        </p>
        <h3>Users List</h3>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setName: (name) => {
        dispatch(setName(name));
      }
    }
}

const mapStateToProps = (state) => {
  return {
    math: state.math,
    user: state.user,
    users:state.user.users
  }
}

export default connect(mapStateToProps, {setName, setAddress, getUsers})(App);

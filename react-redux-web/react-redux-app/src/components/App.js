import React, { Component } from 'react';
import FlashMessagesList from './flash/FlashMessagesList';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    const list = this.props.list;
    return (
      <div className="">
      <FlashMessagesList />
        <div className="jumbotron">Home</div>
        {list.map((user,i)=>(<li key={i}><strong>Name: </strong>{user.Name} <strong>Age: </strong>{user.Age} </li>))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.list.list);
  return {
    list: state.list.list
  }
}

export default connect(mapStateToProps)(App);

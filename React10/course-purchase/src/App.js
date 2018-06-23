import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
      const courses = [
          {name: 'Complete Angular Course', price: 299},
          {name: 'Complete React JS ', price: 499},
          {name: 'React Native and Redux Course', price: 199},
          {name: 'Node js API Course', price: 290},
          {name: 'Complete Javascript and ES6 Course', price: 699}
      ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase Page</h2>
        </div>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;

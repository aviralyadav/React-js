import React, { Component } from 'react';
import auth0 from 'auth0-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Auth from './Auth';
import Header from './components/Header';
import './App.css';
import Github from './components/Github';


class App extends Component {

  static defaultProps = {
    clientID: 'pDcZFu9IO4XK8Haqsp0j4LFKpGLwVo1D',
    domain: 'aviral.auth0.com'
  }
 

  render() {
    return (
      <div className="App">
      <Header/>
        <Github />
      </div>
    );
  }
}

export default App;

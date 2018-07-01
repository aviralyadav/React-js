import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NewArivals from './components/Products/NewArivals/NewArivals';
import GeneralProduct from './components/Products/GeneralProduct/GeneralProduct';
import Header from './components/Header/Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Header /> */}

        {/* slider */}


        <NewArivals />

        <GeneralProduct />

        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;

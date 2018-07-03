import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Link } from 'react-router-dom';
// Using an ES6 transpiler like Babel
import Slider from './components/Slider';
// To include the default styles
import 'react-rangeslider/lib/index.css';

import Footer from './components/Footer/Footer';
import NewArivals from './components/Products/NewArivals/NewArivals';
import GeneralProduct from './components/Products/GeneralProduct/GeneralProduct';
import Header from './components/Header/Header';
import logo from './logo.svg';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Header /> */}

        {/* slider */}
        <Slider />

        <NewArivals />

        <GeneralProduct />

        {/* <Footer /> */}

      </div>
    );
  }
}

export default App;

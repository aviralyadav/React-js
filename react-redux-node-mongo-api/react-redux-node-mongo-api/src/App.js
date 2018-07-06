import React, { Component } from 'react';
import Slider from './components/Slider';
import 'react-rangeslider/lib/index.css';

// import Footer from './components/Footer/Footer';
import NewArivals from './components/Products/NewArivals/NewArivals';
import GeneralProduct from './components/Products/GeneralProduct/GeneralProduct';
// import Header from './components/Header/Header';
// import logo from './logo.svg';
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

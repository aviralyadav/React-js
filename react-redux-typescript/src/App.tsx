import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public state = {
    age:'',
    name: ''
  }
  public getName (age: number, name: string) {
    return `${name} is ${age} years old.`;
  }

  public render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {this.getName(25, 'Avi')}
        </p>
        
      </div>
    );
  }
}

export default App;

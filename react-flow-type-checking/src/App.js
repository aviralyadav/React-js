//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type TestProps = {
  str: string,
  num?: number   ///option to provide 
}

type TestState = {
  message: string
}

type testFuncType = {
  name: string
}

const testFunc = (props: testFuncType) => {
return (<div>{props.name}</div>);
}

class Test extends Component<TestProps, TestState> {  //  first param is props type and secpnd is state type <propsType, stateType>
  state = {
    message: 'hello'
  }
  static defaultProps = {
    str: 'abc'
  }
  
  render (){
    return (
      <div>
        <h3>{this.props.str}</h3>
        <h3>{this.props.num}</h3>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Test str={'test'} /> */}
        <Test /> {/* for default prop value */}
        <testFunc name={'avi'} />
      </div>
    );
  }
}

export default App;

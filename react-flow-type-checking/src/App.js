//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
// import { } from 'react-dom';
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

function TestFunc(props: testFuncType) {

  return <div>{props.name}</div>;
}
// TestFunc.defaultProps = {   ////default props for stateless component 
//   name: 'abhi'
// }

class Test extends Component<TestProps, TestState> {  //  first param is props type and secpnd is state type <propsType, stateType>
  state = {
    message: 'hello'
  }
  // static defaultProps = {
  //   str: 'abc'
  // }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps, this.props);
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate - test');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate - test');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate - test');
  }

  render() {
    console.log('render - test')
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
  constructor(props){
    super(props);
    console.log('constructor');
  }
  state = {
    content: ''
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }
  setNext = () => {
    this.setState({content: 'Hello content'});
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Test str={'test'} />
        {/* <Test /> for default prop value */}
        <TestFunc name={'abhi'} />
        <p>{this.state.content}</p>
        <button onClick={this.setNext} >Click</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

type TestProps = {
    str: string,
    num?: number   ///option to provide 
  }
  
  type TestState = {
    message: string
  }

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

export default Test;
//@flow
import React, { Component } from 'react';
import logo from './logo.svg';
// import { } from 'react-dom';
import './App.css';
import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Test from './Test';
import ConfirmationDialog from './demo';
import ConfirmationDialogFull from './demo-selection-full';
import NewTest from './NewTest';

type testFuncType = {
  name: string
}

function TestFunc(props: testFuncType) {

  return <div>{props.name}</div>;
}
// TestFunc.defaultProps = {   ////default props for stateless component 
//   name: 'abhi'
// }



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
    return true;this
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render', this.props);
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
        </header>
        <NewTest />
        {/* <Test str={'test'} /> */}
        {/* <Test /> for default prop value */}
        {/* <TestFunc name={'abhi'} /> */}
        <p>{this.state.content}</p>
        <Button color="primary" className={classes.button} variant="raised" onClick={this.setNext} >Click</Button>
        {/* <ConfirmationDialog /> */}
        <hr/>
        <ConfirmationDialogFull />
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default withStyles(styles)(App);

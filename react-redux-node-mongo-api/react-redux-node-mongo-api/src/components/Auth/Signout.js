import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signout} from '../../actions/authActions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    this.props.history.push('/');
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signout())
  }
}

export default connect(null, mapDispatchToProps)(Signout);

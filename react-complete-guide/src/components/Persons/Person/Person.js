import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    state = {  }
    render() {
        return (
            <div className={classes.Person}>
                <h1 onClick={this.props.click}>{this.props.Name}</h1>
                <input type="text" onChange={this.props.changed} value={this.props.Name}/>
            </div>
        );
    }
}

Person.propTypes = {
    Name: PropTypes.string,
    click: PropTypes.func,
    changed: PropTypes.func
}

export default Person;


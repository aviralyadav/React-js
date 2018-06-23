import React, { Component } from 'react';
import './App.css';

class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.clicker = this.clicker.bind(this);
    }
    clicker() {
        const active = !this.state.active;
        this.setState({
            active: active
        });
        this.props.sumPrice( active ? this.props.price : -this.props.price );
    }
    render () {
        return (
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.item} <b>{this.props.price}</b></p>
            </div>    
        );
    }
}

export default Course;
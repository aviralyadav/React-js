import React, { Component } from 'react';
import Course from './Course';

class Coursesales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }
    sumPrice(price) {
        this.setState({
            total: this.state.total + price
        });
    }
    render () {
        const courses = this.props.items.map((item, i)=>{
            return (
                <Course item={item.name} price={item.price} key={i} sumPrice={this.sumPrice} />
            );
        });
        return (
            <div>
                <h1>You can buy courses : </h1>
                <div id="courses">{courses}</div><br/>
                <div id="total">Total : <b>{this.state.total}</b></div>
            </div>
        );
    }
}

export default Coursesales;
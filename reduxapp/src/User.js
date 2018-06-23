import React, { Component } from 'react';

export default class User extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
		<p>Name is {this.props.name}</p>
		);
	}
}
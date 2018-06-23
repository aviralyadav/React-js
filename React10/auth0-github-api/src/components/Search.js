import React, { Component } from 'react'

export default class Search extends Component {
    submit(e){
        e.preventDefault();
        const value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value='';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit.bind(this)}>
                <input type="text" ref="username" placeholder="type name and hit enter " />
                </form>
            </div>
        )
    }
}

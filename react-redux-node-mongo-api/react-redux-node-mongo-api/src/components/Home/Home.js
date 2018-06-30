import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { connect } from 'react-redux';
import './Home.css';


class Home extends Component {
    state = {
        message: '',
        messages: []
    }
    onChangeHandler = (e) => {
        this.setState({ message: e.target.value });
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState(state=>({messages: state.messages.concat(state.message), message: ''}));
    }
    render() {
        let loadMessage = this.state.messages.map((msg,i)=>(
            <li key={i}>{msg}</li>
        ));
        return (
            <div className="container">
                <form className="form-css" onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.message} placeholder="Enter Message" onChange={this.onChangeHandler} />

                            </div>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary" type="submit">Add Message</button>
                        </div>
                        <div className="col-md-4">
                            <h3>Messages</h3>
                            <ul>
                                {loadMessage}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { addMessage, getMessages } from '../../actions/messageActions';


class Home extends Component {
    state = {
        message: '',
    }
    componentWillMount(){
        this.props.getMessages();
    }
    onChangeHandler = (e) => {
        this.setState({ message: e.target.value });
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state.message);
        this.setState({message: ''});
    }
    render() {
        let loadMessage = this.props.messages.map((msg,i)=>(
            <li key={i}>{msg.message}</li>
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

const mapStateToProps = state => {
    return {
        messages: state.messageReducer.messages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: (message) => dispatch(addMessage(message)),
        getMessages: () => dispatch(getMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
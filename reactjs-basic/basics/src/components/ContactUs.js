import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.saveMessage = this.saveMessage.bind(this);
    }
    saveMessage(obj) {
        //console.log(obj);
        axios.post('http://localhost:8080/send/message', obj)
            .then((res)=>{
                this.setState({message: 'Message Sent Successfully!'});
                //setInterval(() => this.setState({ time: Date.now(), 1000);
            })
    }
    render() {
        return (
            <div>
                <h2>Contact US</h2>
                <hr/>
                <ContactForm  saveMessage={this.saveMessage}/>
                <hr/>
                <p style={{color: 'green', fontSize: 20}}>{this.state.message}</p>
            </div>
        );
    }
}

export default ContactUs;

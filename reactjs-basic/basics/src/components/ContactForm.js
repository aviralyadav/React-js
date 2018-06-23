import React from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            phone:'',
            message:''
        }
        this.handleName=this.handleName.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handlePhone=this.handlePhone.bind(this);
        this.handleMessage=this.handleMessage.bind(this);
        this.sendMessage=this.sendMessage.bind(this);
      }
    handleName(e) {
        this.setState({name:e.target.value});
    }
    handleEmail(e) {
        this.setState({email:e.target.value});
    }
    handlePhone(e) {
        this.setState({phone:e.target.value});
    }
    handleMessage(e) {
        this.setState({message:e.target.value});
    }
    sendMessage(e) {
        e.preventDefault();
        let obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }
        this.props.saveMessage(obj);
        this.setState({
            name:'',
            email:'',
            phone:'',
            message:''
        })
    }

    render() {
        return (
            <form onSubmit={this.sendMessage}>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" onChange={this.handleName} value={this.state.name} className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" onChange={this.handleEmail} value={this.state.email} className="form-control" placeholder="Email" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="text" onChange={this.handlePhone} value={this.state.phone} className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Message</label>
                    <textarea onChange={this.handleMessage} value={this.state.message} className="form-control" placeholder="Message" />
                </div>
                
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        ); 
    }
}

export default ContactForm;
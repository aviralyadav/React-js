import React from 'react';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            username:'',
            phone:'',
            address:'',
            Website:''
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleWebsite = this.handleWebsite.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    handleName(e) {
        this.setState({
            name:e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    handleUsername(e) {
        this.setState({
            username:e.target.value
        })
    }
    handlePhone(e) {
        this.setState({
            phone:e.target.value
        })
    }
    handleAddress(e) {
        this.setState({
            address:e.target.value
        })
    }
    handleWebsite(e) {
        this.setState({
            website:e.target.value
        })
    }
    saveUser(evt) {
        evt.preventDefault();
        var obj = {
            name:this.state.name,
            email:this.state.email,
            username:this.state.username,
            phone:this.state.phone,
            address:this.state.address,
            website:this.state.website
        }
        this.props.clickHandler(obj);
        
    }

    render() {
        return (
            <form onSubmit={this.saveUser}>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" onChange={this.handleName} value={this.state.name} className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" onChange={this.handleEmail} value={this.state.email} className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" onChange={this.handleUsername} value={this.state.username} className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="text" onChange={this.handlePhone} value={this.state.phone} className="form-control" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" onChange={this.handleAddress} value={this.state.address} className="form-control" placeholder="Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputWebsite">Website</label>
                    <input type="text" onChange={this.handleWebsite} value={this.state.website} className="form-control" placeholder="Website" />
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" />Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        ); 
    }
}

export default NewUser;
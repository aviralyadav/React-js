import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            username: '',
            show: false,
            isEditing: false
        }
    }
    showDetail(user, id) {
        //console.log(user, id);
        this.setState({
            user,
            username: user.username,
            show: !this.state.show
        })
    //this.props.showDetail(this.state.username);
    }
    userDelete(id) {
        this.props.userRemove(id);
    }
    editUserFunc() {
        this.setState({
            isEditing: true
        })
    }
    updateUser(evt) {
        evt.preventDefault();
        this.props.userUpdate(this.props.userList._id, this.input.value);
        this.setState({
            isEditing: false
        })
    }
    getUserList() {
        return (
                <tr>
                <td>{this.props.userList.name}</td>
                
                 <td><button 
                        className="btn btn-info" 
                        onClick={(evt)=>{
                            evt.stopPropagation();
                            this.showDetail(this.props.userList, this.props.index)
                            }}>Show Detail</button></td> 
                <td><button onClick={()=>this.editUserFunc(this.props.index)} className="btn btn-primary">Edit User</button></td>
                <td><button onClick={()=>{this.userDelete(this.props.userList._id)}} className="btn btn-warning">Delete</button>
                </td> 
                </tr>
        );
    }
    
    editForm() {
        return (
            <form onSubmit={this.updateUser.bind(this)}>
                <input type="text" ref={ (value) => {this.input = value} } defaultValue={this.props.userList.name}  />{' '}
                
                <button type="submit" className="btn btn-primary">Update User</button>
            </form>
        );
    }
    renderDetail() {
        return (
            <div>
                    <h3>User Detail</h3>
                    <p>User Name: {this.state.user.name}</p>
                    <p>Email: {this.state.user.email}</p>
                    <p>User ID: {this.state.username}</p>
            </div>
        );
    }

    render() {
        return (
            // <div>
            //     {/* <ul> */}
            //         { this.state.isEditing ? this.editForm() : this.getUserList() }
                    
            //     {/* </ul> */}
            //     { this.state.show ? this.renderDetail() : ''}
            // </div>
            this.getUserList()
        );
    }
}

export default UserList;

UserList.propTypes = {
    userList: PropTypes.object.isRequired,
    userRemove: PropTypes.func.isRequired
}

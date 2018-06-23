import React from 'react';
import axios from 'axios';
import UserList from './UserList';
import { Link } from 'react-router-dom';
import '../App.css';

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isShow: false,
            user: '',
            username: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/users')
            .then((res)=> {
                //console.log(res.data);
                this.setState({
                    users: res.data
                })
            })
    }
    showDetail(obj) {
        console.log(obj);

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
    userRemove(id) {
        console.log(id);
        axios.get('http://localhost:8080/delete/user/'+id)
            .then((res)=>{
                this.componentDidMount();
            }).catch((Error)=>console.log(Error));
    }
    userUpdate(id, newValue) {
        axios.get('http://localhost:8080/update/userid/'+id+'/'+newValue)
            .then((res)=>{
                this.componentDidMount();
                
            });
    }

    render() {
        return (
            <div>
                <h1>User Page</h1>
                <p>All Users - <Link to="/contact">Add New</Link></p>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Detail</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {   this.state.users.map((user, index)=>{
                                return (<UserList 
                                    userList={user}
                                    userRemove={this.userRemove.bind(this)}
                                    index={index}
                                    key ={index}
                                    showDetail={this.showDetail.bind(this)}
                                    userUpdate={this.userUpdate.bind(this)}
                                />);
                            })
                            }
                        
                    </tbody> 
                    
                </table>
               
            </div>
        );
    }
}
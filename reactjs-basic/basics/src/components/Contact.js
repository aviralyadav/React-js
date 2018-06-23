import React from 'react';
import NewUser from './NewUser';
import axios from 'axios';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(obj) {
        console.log('button clicked');
        axios.post('http://localhost:8080/save/userdata',obj)
            .then((res)=>this.props.history.push('/user'))
            .catch((Error)=>console.log(Error));
        //this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Add User</h2>
                <NewUser clickHandler={this.onSubmit}/>
            </div>
        );
    }
}
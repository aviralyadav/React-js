import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        let userdata = this.props.userData;
        let name = userdata.name;
        console.log(this.props.userData);
        if(userdata.name === null) {
            return (
                <div>
                    <p>User not available!</p>
                </div>
            );
        } else {
            return (
                <div>
                   <p> Name : {name}</p>
                   <p> Followers : {userdata.followers}</p>
                   <p> Following : {userdata.following}</p>
                   <p> Home URL : {userdata.homeUrl}</p>
                   <p><img src={userdata.avatar} /></p>
                </div>
            )
        }
        
    }
}

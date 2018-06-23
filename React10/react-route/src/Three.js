import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class  Three extends Component {
    render() {
        //console.log(this.props.children);
        return (
            <div>
            <h1>This is three component</h1>
            <ul>
                <li><Link to="/Three/12345" >Three.1</Link></li>
            </ul>
            <p>{this.props.children}</p>
            </div>
        );
    }
}

export default  Three;
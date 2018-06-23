import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class DriverList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            show: false,
            isEditing: false
        }
    }
    changeStatus(id, status){
        this.props.changeStatus(id, status);
    }
    removeDriver(id){
        confirmAlert({
          title: 'Confirmation',                        // Title dialog 
          message: 'Are you sure to delete this driver.',               // Message dialog 
          //childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component 
          confirmLabel: 'Confirm',                           // Text button confirm 
          cancelLabel: 'Cancel',                             // Text button cancel 
          onConfirm: () => this.props.removeDriver(id),    // Action after Confirm 
          onCancel: () => console.log('Action after Cancel'),      // Action after Cancel 
        })
    }
    renderButtons() {
       return this.props.driverList.active ? <button className="btn btn-warning" 
                onClick={()=>this.changeStatus(this.props.driverList._id, this.props.driverList.active)}>Disable</button> :  <button className="btn btn-success" 
                onClick={()=>this.changeStatus(this.props.driverList._id, this.props.driverList.active)}>
                Enable</button>
    }
    getDriverList() {
        return (
                <tr>
                <td>{this.props.driverList.name}</td>
                <td>{this.props.driverList.email}</td>
                <td>{this.props.driverList.contact}</td> 
                
                <td>
                {this.renderButtons()} &nbsp;
                <button className="btn btn-danger" onClick={()=>this.removeDriver(this.props.driverList._id)}>Delete</button>
                </td> 
                </tr>
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
            this.getDriverList()
        );
    }
}

export default DriverList;

DriverList.propTypes = {
    driverList: PropTypes.object.isRequired
    
}

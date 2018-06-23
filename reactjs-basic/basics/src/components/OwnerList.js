import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class OwnerList extends React.Component {
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
    removeOwner(id){
        confirmAlert({
          title: 'Confirmation',                        // Title dialog 
          message: 'Are you sure to delete this owner.',               // Message dialog 
          //childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component 
          confirmLabel: 'Confirm',                           // Text button confirm 
          cancelLabel: 'Cancel',                             // Text button cancel 
          onConfirm: () => this.props.removeOwner(id),    // Action after Confirm 
          onCancel: () => console.log('Action after Cancel'),      // Action after Cancel 
        })
    }
    renderButtons() {
       return this.props.ownerList.active ? <button className="btn btn-warning" 
                onClick={()=>this.changeStatus(this.props.ownerList._id, this.props.ownerList.active)}>Disable</button> :  <button className="btn btn-success" 
                onClick={()=>this.changeStatus(this.props.ownerList._id, this.props.ownerList.active)}>
                Enable</button>
    }
    getOwnerList() {
        return (
                <tr>
                <td>{this.props.ownerList.name}</td>
                <td>{this.props.ownerList.email}</td>
                <td>{this.props.ownerList.contact}</td> 
                
                <td>
                {this.renderButtons()} &nbsp;
                <button className="btn btn-danger" onClick={()=>this.removeOwner(this.props.ownerList._id)}>Delete</button>
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
            this.getOwnerList()
        );
    }
}

export default OwnerList;

OwnerList.propTypes = {
    ownerList: PropTypes.object.isRequired
    
}

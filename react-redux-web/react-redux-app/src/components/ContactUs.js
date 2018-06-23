import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from './TextFieldGroup';
import validationInput from './validation/contactus';
import { sendContactForm } from './actions/contactActions';
import { flashMessages } from './actions/flashActions';

class ContactUs extends Component {
    constructor(props){
        super();
        this.state = {
            name: '',
            mobile: '',
            email: '',
            message: '',
            isEmpty: true,
            errors: {}
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    isValid () {
        const { isValid, errors } = validationInput(this.state);
        if(!isValid) {
             this.setState({errors});
        }
        return isValid;
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({errors: {}});
        if(this.isValid()){
            console.log(this.state);
            this.props.sendContactForm(this.state);
            this.props.flashMessages({
                type: 'success',
                text: 'Thanks for contacting us, We will contact you shortly!'
            });
            this.context.router.history.push('/');
        }
        
    }
    render () {
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                <h4>CONTACT US</h4>
                <form onSubmit={this.submitHandler}>
                    <TextFieldGroup 
                         field="name"
                         onChange={this.onChange}
                         value={this.state.name}
                         error={errors.name}
                         label="Name"
                    />

                    <TextFieldGroup 
                         field="mobile"
                         onChange={this.onChange}
                         value={this.state.mobile}
                         error={errors.mobile}
                         label="Mobile"
                    />
                    <TextFieldGroup 
                         field="email"
                         onChange={this.onChange}
                         value={this.state.email}
                         error={errors.email}
                         label="Email"
                    />
                    <TextFieldGroup 
                         field="message"
                         onChange={this.onChange}
                         value={this.state.message}
                         error={errors.message}
                         label="Message"
                    />
                    <div>
                        <button type="submit" disabled={!this.state.isEmpty} className="btn btn-primary btn-lg" >Send Message</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendContactForm: (formData) => dispatch(sendContactForm(formData)),
        flashMessages: (data) => dispatch(flashMessages(data))
    }
}

ContactUs.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(ContactUs);
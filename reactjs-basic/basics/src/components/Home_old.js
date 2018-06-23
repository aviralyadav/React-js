import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            headerText: props.headerTextValue
        }
        setInterval(()=> (
            this.setState({
                status: this.state.status + 1
            })
        ),3000)
    }
    changeHeaderLink() {
        this.props.changeHeader(this.state.headerText);
    }
    makeMeOlder() {
        this.setState({
            age: this.state.age + 4
        })
    }
    onChangeHadle(event){
        this.setState({
            headerText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>This is new Component</p>
                <p>Your name is { this.props.name } and age is {this.state.age}.</p>
                <p>Status { this.state.status}</p>
                <hr/>
                <button onClick={() => this.makeMeOlder()} className="btn btn-primary">Make me older</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-info">CLick Parent Func</button>
                <hr/>
                <input type="text" 
                    value={this.state.headerText} 
                    onChange={(evt)=>this.onChangeHadle(evt)} 
                />
                <button onClick={this.changeHeaderLink.bind(this)} className="btn btn-danger">Change Header Text</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string.isRequired,
    initialAge: PropTypes.number.isRequired,
    greet: PropTypes.func.isRequired,
    changeHeader: PropTypes.func.isRequired,
    headerTextValue: PropTypes.string.isRequired
}

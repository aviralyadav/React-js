import React from 'react';

class DemoTest extends React.Component {
    state = { counter: 0 }
    increment = () =>{
        this.setState({counter: this.state.counter+1});
    }
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increment}>Counter</button>
            </div>
        );
    }
}

export default DemoTest;
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            headerLink: "Home"
        }
    }
    changeHeaderText(newText) {
        this.setState({
            headerLink: newText
        })
    }
    onGreet() {
        alert('Hello Brother!');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header headerLink={this.state.headerLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Aviral"} 
                            initialAge={26} 
                            greet={this.onGreet} 
                            changeHeader={this.changeHeaderText.bind(this)}
                            headerTextValue={this.state.headerLink}
                        />
                         
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('root'));

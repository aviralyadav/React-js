import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Coursesales from './Coursesales';

ReactDOM.render(<Router>
                <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    
                </ul>
                <hr/>
                <Route exact path='/' component={App} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                
                
                </div>
                </Router>, 
document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import Three from './Three';
import Threepoint1 from './Threepoint1';
import NoMatch from './NoMatch';
//import { Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(<Router>
                <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/One" component={One}></Route>
                <Route path="/Two" component={Two}></Route>
                <Route path="/Three" component={Three}>
                    <Route path="/Three/:id" component={Threepoint1} />
                
                </Route>
                <Route component={NoMatch} ></Route>
                
                </Switch>
                </Router>
                ,document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';
import { Link,IndexRoute } from 'react-router-dom';

const browserHistory = createBrowserHistory();
const App = () => (
    <div>
        <h1>App</h1>
        <Link to="/about">About Component</Link>
    </div>
)

const About = (props) => (
    <div>
        <h1>About</h1>
        <div>{props.children} </div>
        <Link to="/">App Component</Link>
        { ' ' }
        <Link to="/sports" >Sports</Link>
        { ' ' }
        <Link to="/city" >City</Link>
    </div>
)

const SportImage = () => (
    <div>
    <img src="http://lorempixel.com/400/200/sports/" alt="" />
    <Link to="/">App Component</Link>
        { ' ' }
        <Link to="/sports" >Sports</Link>
        { ' ' }
        <Link to="/city" >City</Link>
        </div>
)

const CityImage = () => (
    <div>
    <img src="http://lorempixel.com/400/200/city/" alt="" />
    <Link to="/">App Component</Link>
        { ' ' }
        <Link to="/sports" >Sports</Link>
        { ' ' }
        <Link to="/city" >City</Link>
        </div>
)

const Root = () =>
  
    <Router history={browserHistory}>
        <Switch>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path="/sports" component={SportImage} />
        <Route path="/city" component={CityImage} />
        </Switch>
    </Router>
  

ReactDOM.render(<Root />, document.getElementById('root'));


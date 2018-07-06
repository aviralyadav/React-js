import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import GeneralProduct from './components/Products/GeneralProduct/GeneralProduct';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Products/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Signup from './components/Auth/Signup/Signup';
import Signin from './components/Auth/Signin/Signin';
import Dashboard from './components/Dashboard/Dashboard';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <div className="base">
                <Header />
                <Route path="/" exact component={App} />
                <Route path="/shop" component={GeneralProduct} />
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/cart" component={Cart} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

    let config = {
        apiKey: "AIzaSyCUC-gu774TG-zFuM9EIa767rl2D2bA7Vg",
        authDomain: "u-servay-b5af8.firebaseapp.com",
        databaseURL: "https://u-servay-b5af8.firebaseio.com",
        projectId: "u-servay-b5af8",
        storageBucket: "u-servay-b5af8.appspot.com",
        messagingSenderId: "886355453187"
      };
  firebase.initializeApp(config);

class Authen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: ''
        }
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
        this.google = this.google.bind(this);
        this.googleRedirect = this.googleRedirect.bind(this);
        this.facebook = this.facebook.bind(this);
    }
    login(e) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.then(user => {
            console.log(user);
            const lout = document.getElementById('logout');
            this.setState({
                err: 'Welcome '+ user.email
            });
            lout.classList.remove('hide');
        });
        promise.catch(err=>{
            this.setState({err: err.message});
        })
    }
    signup(e) {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.then(user => {
            firebase.database().ref('users/'+user.uid).set({
                email: user.email
            });
            this.setState({
                err: 'Welcome '+ user.email
            });
        }).catch(e=>{
            this.setState({
                err: e.message
            });
        })
    }
    logout() {
        firebase.auth().signOut();
        const lout = document.getElementById('logout');
        this.setState({
            err: 'You have logged out!'
        });
        lout.classList.add('hide');
    }
    google() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const promise = firebase.auth().signInWithPopup(provider);
        promise.then(results =>{
            const user = results.user;
           firebase.database().ref('users/'+user.uid).set({
               email: user.email,
               name: user.displayName
           }); 
            this.setState({
                err: 'Logged in using Google'
            });
            const lout = document.getElementById('logout');
            lout.classList.remove('hide');
        });
        promise.catch(er => {
            this.setState({
                err: er.message
            });
        });
    }
    googleRedirect() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const promise = firebase.auth().signInWithRedirect(provider);
        promise.then(results => {
            const user = results.user;
            //console.log(results);
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });
            this.setState({
                err: 'Logged in using Google'
            });
        });
        promise.catch(e => {
            this.setState({
                err: e.message
            });
        });
    }
    facebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        const promise = firebase.auth().signInWithPopup(provider);
        promise.then(results => {
            const user = results.user;
            //console.log(results);
            firebase.database().ref('users/'+user.uid).set({
                email: user.email,
                name: user.displayName
            });
            const lout = document.getElementById('logout');
            lout.classList.remove('hide');
            this.setState({
                err: 'Logged in using Facebook'
            });
        });
        promise.catch(e => {
            this.setState({
                err: e.message
            });
        });
    }
    render() {
        return (
        <div className="card">
            <h1>Log-in</h1>
            <input className="namy" type="email" id="email" ref="email" placeholder="Enter your email" /><br/><br/>
            <input className="namy" type="password" id="password" ref="password" placeholder="Enter your password" /><br/><br/>
            <p>{this.state.err}</p>
            <button className="submit" onClick={this.login}>Login</button>
            <button className="submit" onClick={this.signup}>Signup</button>
            <button className="submit hide" id="logout" onClick={this.logout}>Logout</button>
            <button className="google" id="google" onClick={this.google}>Sign in with Google Popup</button>
            <button className="google"  onClick={this.googleRedirect}>Sign in with Google Redirect</button>
            <button className="facebook"  onClick={this.facebook}>Sign in with Facebook</button>
        </div>
        );
    }
}

export default Authen;
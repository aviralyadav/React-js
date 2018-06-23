import React, {Component} from 'react';
import '../App.css';
import firebase from 'firebase';
import uuid from 'uuid';

const config = {
    apiKey: "AIzaSyCUC-gu774TG-zFuM9EIa767rl2D2bA7Vg",
    authDomain: "u-servay-b5af8.firebaseapp.com",
    databaseURL: "https://u-servay-b5af8.firebaseio.com",
    projectId: "u-servay-b5af8",
    storageBucket: "u-servay-b5af8.appspot.com",
    messagingSenderId: "886355453187"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {
    constructor(props){
        super(props);
        this.state = {
            uid: uuid.v1(),
            studentName:'',
            answers: {
                answer1: '',
                answer2: '',
                answer3: ''
            },
            isSubmitted: false
        }
        this.nameSubmit = this.nameSubmit.bind(this);
        this.submitQuestions = this.submitQuestions.bind(this);
        this.selectedAnswer = this.selectedAnswer.bind(this);
    }
    nameSubmit(e) {
        e.preventDefault();
        let studentName = this.refs.studentName.value;
        this.setState({studentName: studentName}, function(){
            console.log(this.state);
        })
    }
    selectedAnswer(e) {
        let answers = this.state.answers;  
        if(e.target.name === 'answer1') {
            answers.answer1 = e.target.value;
        } else if(e.target.name === 'answer2') {
            answers.answer2 = e.target.value;
        } else if(e.target.name === 'answer3') {
            answers.answer3 = e.target.value;
        }
        this.setState({answers: answers}, function(){
            console.log(this.state);
        });
    }
    submitQuestions() {
        firebase.database().ref("uSurvey/"+this.state.uid).set({
            studentName: this.state.studentName,
            answers: this.state.answers
        });
        this.setState({
            isSubmitted: true
        });
    }
    render() {
        let studentName, questions;
        if(this.state.studentName === '' && this.state.isSubmitted === false) {
             studentName = <div>
                  <h1>Hey Student, please let us your name: </h1>
            <form onSubmit={this.nameSubmit}>
                <input className="namy" type="text" placeholder="Enter your name" ref="studentName" />
            </form>
            </div>
        } else if(this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <h1>Welcome to U-Survey, {this.state.studentName} </h1>;
            questions = <div>
                <h2>Here are some questions:</h2>
                <form onSubmit={this.submitQuestions}>
                <div className="card">
                <label>What kind of courses you like most?</label><br/><br/>
                    <input type="radio" name="answer1" value="Technology" onChange={this.selectedAnswer} />Technology
                    <input type="radio" name="answer1" value="Design" onChange={this.selectedAnswer}/>Design
                    <input type="radio" name="answer1" value="Marketing" onChange={this.selectedAnswer}/>Marketing
                </div> 
                <div className="card">
                <label>You are a.</label><br/><br/>
                    <input type="radio" name="answer2" value="Student" onChange={this.selectedAnswer}/>Student
                    <input type="radio" name="answer2" value="In-job" onChange={this.selectedAnswer}/>In-job
                    <input type="radio" name="answer2" value="Looking for job" onChange={this.selectedAnswer}/>Looking for job
                </div> 
                <div className="card">
                <label>Is online learning helpful?</label><br/><br/>
                    <input type="radio" name="answer3" value="Yes" onChange={this.selectedAnswer}/>Yes
                    <input type="radio" name="answer3" value="No" onChange={this.selectedAnswer}/>No
                    <input type="radio" name="answer3" value="May be" onChange={this.selectedAnswer}/>May be
                </div> <br/>
                <input type="submit" className="submit" value="Submit" />
                </form>
                </div>;
        } else if(this.state.isSubmitted === true) {
            studentName = <h1>Thanks, {this.state.studentName}</h1>
        }
        return(
            <div>
                
                {studentName}
            ---------------------------------------------
                {questions}
            </div>
        );
    }
}

export default Usurvey;
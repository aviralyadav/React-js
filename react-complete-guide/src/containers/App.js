import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    personsArr: [
      { name: 'Aviral', id: "asda" },
      { name: 'Abhishek', id: 'assaa' }
    ],
    persons: false,
  }
  changeNameHandler = (newName) => {
    this.setState({
      name: newName
    })
  }
  onChangeHandler = (event, id) => {
    const personIndex = this.state.personsArr.findIndex(p => { 
      return p.id === id 
    });
    const person = {
      ...this.state.personsArr[personIndex]
    };
    person.name = event.target.value;
    const pNew = [...this.state.personsArr];
    pNew[personIndex] = person;
    this.setState({
      personsArr: pNew
    })
  }
  togglePersonHandler = () => {
    const showPersons = this.state.persons;
    this.setState({
      persons: !showPersons
    })
  }
  deleteHandler = (pIndex) => {
    const personsArr = [...this.state.personsArr];
    personsArr.splice(pIndex, 1);
    this.setState({ personsArr });
  }

  render() {
    let persons = null;
    if (this.state.persons) {
      persons = (
          <Persons 
            allPerson = {this.state.personsArr} 
            clicked = {this.deleteHandler} 
            changed = {this.onChangeHandler}
          />
      );
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
          title = {this.props.appTitle}
          personsArr = {this.state.personsArr}
          toggle = {this.togglePersonHandler}
          showToggle = {this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;

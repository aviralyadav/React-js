import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    personsArr: [
      { name: 'Aviral', id: "asda" },
      { name: 'Abhishek', id: 'assaa' }
    ],
    persons: false,
    charLength: 0,
    chars: ''
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
    //const personsArr = this.state.personsArr.slice();
    const personsArr = [...this.state.personsArr];
    personsArr.splice(pIndex, 1);
    this.setState({ personsArr });
  }

  onChangeCounterHandler = (event) => {
    const inputText = event.target.value;
    this.setState({
      charLength: inputText.length,
      chars: inputText
    })
  }

  removeCharHandler = (index) => {
    const charArrList = this.state.chars.split('');
    charArrList.splice(index, 1);
    const newChangedCharList = charArrList.join('');
    console.log(newChangedCharList);
    this.setState({
      chars: newChangedCharList
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      cursor: "pointer",
      padding: 10
    }
    let persons = null;
    if (this.state.persons) {
      persons = (
        <div>
          {this.state.personsArr.map((person, i) => {
            return (
              <Person
                key={person.id}
                click={() => this.deleteHandler(i)}
                changed={(event) => this.onChangeHandler(event, person.id)}
                Name={person.name}
              />
            );
          })}
        </div>
      );
    }

    let charCompRender = null;
    const charArr = this.state.chars.split('');
    if(this.state.chars){
      charCompRender = (
        <div>
          {charArr.map((ch, i) => {
            return (
            <CharComponent 
              char={ch} 
              key={i}
              click={() => this.removeCharHandler(i)}
            />
          )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am react developer.</h1>
        <button style={style} onClick={this.togglePersonHandler}>Change Name</button>
        {persons}
        <input type="text" onChange={this.onChangeCounterHandler} />
        <ValidationComponent charLen = {this.state.charLength} />
        {charCompRender}
      </div>
    );
  }
}

export default App;

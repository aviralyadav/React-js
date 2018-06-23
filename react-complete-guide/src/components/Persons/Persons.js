import React, { Component } from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends Component {
  state = {  }

  render() {
    return this.props.allPerson.map((person, i) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(i)}
          changed={(event) => this.props.changed(event, person.id)}
          Name={person.name}
        />
      );
    });
  }
}

Persons.propTypes = {
  clicked: PropTypes.func,
  changed: PropTypes.func
}

export default Persons;
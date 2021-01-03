import React, { Component } from "react";
import Person from "./Person/Person";

export class App1 extends Component {
  state = {
    persons: [
      { id: "764y74", name: "Max", age: 28 },
      { id: "76rutiur", name: "Manu", age: 29 },
      { id: "76ghgfh", name: "Stephanie", age: 26 },
    ],
    otherState: "some Other Value",
    showPersons: false,
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  ageChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.age = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  toggleButtonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changeName={(event) => this.nameChangeHandler(event, person.id)}
                changeAge={(event) => this.ageChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }
    return (
      <div>
        <h1>Hi, I'mn a React App</h1>
        <p>This is realy working</p>
        <button style={style} onClick={this.toggleButtonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App1;

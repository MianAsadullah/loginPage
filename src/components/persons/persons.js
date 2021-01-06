import React from "react";

const persons = (props) =>
  props.persons.map((person, index) => {
    <Person
      click={() => this.deletePersonHandler(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changeName={(event) => this.nameChangeHandler(event, person.id)}
      changeAge={(event) => this.ageChangeHandler(event, person.id)}
    />;
  });

export default persons;

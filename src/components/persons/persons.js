import React from "react";
import Person from "../../Person/Person";
const Persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changeName={(event) => props.changed(event, person.id)}
        changeAge={(event) => props.changedAge(event, person.id)}
      />
    );
  });

export default Persons;

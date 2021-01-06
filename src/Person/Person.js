import React from "react";
import "./Person.css";
const Person = (props) => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("something went wrong");
  }
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name}></input>
      <input type="number" onChange={props.changeAge} value={props.age}></input>
    </div>
  );
};
export default Person;

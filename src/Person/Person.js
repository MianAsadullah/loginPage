import React from "react";

const Person = (props) => {
  return (
    <div>
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

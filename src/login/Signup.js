import React, { useState } from "react";

function Signup() {
  const [stateEmail, setstateEmail] = useState([]);
  const [usernameState, userSetstate] = useState([]);
  const [statePassword, setstatePassword] = useState([]);
  const handleusername = (event) => {
    userSetstate({
      UserNmae: event.target.value,
    });
  };

  const handlePassword = (event) => {
    setstatePassword({
      i: event.target.value,
    });
  };
  const handleEmail = (event) => {
    setstateEmail({
      Email: event.target.value,
    });
  };
  const handleLogin = () => {
    alert(
      `User Name: 
         
        ${usernameState.UserNmae} +
        {\n} Password 

        ${statePassword.i}`
    );
  };
  return (
    <div className="container pt-3 text-primary text-center font-weight-bold">
      <h1>Signup</h1>
      <div>
        <label>User Name</label>
      </div>
      <div>
        <input
          type="text"
          value={usernameState.UserNmae}
          onChange={handleusername}
          placeholder="User Name"
        ></input>
      </div>
      <div>
        <label>Password</label>
        <div>
          <input
            type="password"
            value={statePassword.i}
            onChange={handlePassword}
            placeholder="Password"
          ></input>
        </div>
      </div>
      <div></div>
      <div>
        <label>Email Address</label>
        <div>
          <input
            type="email"
            value={stateEmail.Email}
            onChange={handleEmail}
            placeholder="Email Address"
          ></input>
        </div>
      </div>
      <button
        className=" btn-primary"
        type="submit"
        value="submit"
        onClick={handleLogin}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;

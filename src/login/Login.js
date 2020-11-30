import React, { useState } from "react";

function Login() {
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

  const handleLogin = () => {
    alert(
      "User Name:" +
        " " +
        `${usernameState.UserNmae}` +
        "\nPassword:" +
        " " +
        `${statePassword.i}`
    );
  };
  return (
    <div className="container pt-3 text-primary font-weight-bold">
      <h1>LogIn</h1>
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
      <div>
        <input type="checkbox"></input>
        Remember Me
      </div>
      <button
        className=" btn-primary"
        type="submit"
        value="submit"
        onClick={handleLogin}
      >
        LogIn
      </button>
    </div>
  );
}

export default Login;

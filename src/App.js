import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./login/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;

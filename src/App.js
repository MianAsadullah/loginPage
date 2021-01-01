import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";
import Signup from "./login/Signup";
import CounterOne from "./Person/CounterOne";
import { HookContainer } from "./Person/HookContainer";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={CounterOne} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

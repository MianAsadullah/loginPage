import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App1 from "./App1";
import Login from "./login/Login";
import Signup from "./login/Signup";
import CounterOne from "./Person/CounterOne";
import HookContainer from "./Person/HookContainer";
import "./App.css";
function App() {
  return (
    <div className="App">
      {
        // <Router>
        //   <Switch>
        //     <Route exact path="/signup" component={Signup} />
        //     <Route exact path="/login" component={Login} />
        //     <Route exact path="/" component={CounterOne} />
        //   </Switch>
        // </Router>
      }
      <App1 />
    </div>
  );
}

export default App;

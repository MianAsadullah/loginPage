import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App1 from "./App1";
import CounterOne from "./otherComponets/CounterOne";
import "./App.css";
import Signup from "./components/login/Signup";
import Login from "./components/login/Login";
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

import React from "react";
import "./App.css";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
}

export default App;

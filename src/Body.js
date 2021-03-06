import React from "react";
import { Route, Switch } from "react-router";
import SignUp from "./SignUp/SignUp";
import Login from "./SignUp/Login";
import Home from "./home/Home";

const Body = () => (
  <div>
    <Switch>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Body;

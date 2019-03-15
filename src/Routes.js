import React from "react";
import App from "./App";
import { Route, Router } from "react-router-dom";
import Profile from "./Profile";

const Routes = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/profile" component={Profile} />
  </Router>
);

export default Routes;

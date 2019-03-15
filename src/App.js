import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";
import Home from "./Home";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;

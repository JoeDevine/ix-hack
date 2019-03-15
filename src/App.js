import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;

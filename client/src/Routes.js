import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";

const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePage}></Route>
        <Route path="/menu" exact component={Menu}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;

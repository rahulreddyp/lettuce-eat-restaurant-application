import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Menu}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;

import React, { Component } from "react";
import "./App.css";
import Home from "./page/Home.js";
// import Construction from "./page/Construction.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={"/"} component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);

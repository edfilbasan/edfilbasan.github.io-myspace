import React, { Component } from "react";
import "./App.css";
import Home from "./page/home.js";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from "react";
import "./App.css";
import { Home } from "./page/home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(App);

// <div>
//       {/*<App> is wrapped in <BrowserRouter> in index.js*/}
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/create" component={CreateShotView} />
//           <Route
//             exact
//             path="/previs"
//             component={PrevisView}
//           />
//           <Route exact path="/confirm" component={ConfirmView} />
//           <Route exact path="/submit" component={SubmitView} />
//           <Route exact path="/three" component={BaseThreeScene} />
//           <Route exact path="/notfound" component={NotFound} />
//           <Route exact path="/empty" component={EmptyView} />
//         </Switch>
//     </div>

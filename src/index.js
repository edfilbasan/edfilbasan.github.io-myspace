import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL + "/"}>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();

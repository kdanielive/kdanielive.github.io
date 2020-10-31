import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");

const routing = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(routing, rootElement);

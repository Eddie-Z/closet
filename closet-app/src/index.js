import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Link } from "@reach/router";
import Closet from "./Closet";

let Home = () => <div>Home</div>;

let Dashboard = () => <div>Dash</div>;
let Generator = () => <div>Generate</div>;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" />
      <Dashboard path="/dashboard" />
      <Closet path="/closet" />
      <Generator path="/generate" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

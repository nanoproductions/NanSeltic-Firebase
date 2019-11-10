import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import LoginComponent from "./Login/login";
import SignupComponent from "./Signup/signup";
import DashboardComponent from "./Dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAZLTX1ts95q99gg5HlX5O9WtPpJ8glBeM",
  authDomain: "nanseltic-fireba.firebaseapp.com",
  databaseURL: "https://nanseltic-fireba.firebaseio.com",
  projectId: "nanseltic-fireba",
  storageBucket: "nanseltic-fireba.appspot.com",
  messagingSenderId: "115605607305",
  appId: "1:115605607305:web:a317b78c3b26cec1a84758"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/" exact component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

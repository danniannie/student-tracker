import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router>
          <Home path="/"/>
        </Router>
      </div>
    );
  }
}

export default App;

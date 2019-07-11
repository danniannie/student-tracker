import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Home from "./components/Home";
import StudentsSearch from "./components/StudentsSearch";
import StudentProfile from "./components/StudentProfile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav />
        <Router>
          <Home path="/"/>
          <StudentsSearch path='/students'/>
          <StudentProfile path='/students/:id'/>
        </Router>
      </div>
    );
  }
}

export default App;

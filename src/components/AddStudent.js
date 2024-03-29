import React, { Component } from "react";
import * as api from "../api";

class AddStudent extends Component {
  state = {
    name: "",
    startingCohort: 0,
    addedStudent: ""
  };
  render() {
    const { name, startingCohort, currentBlock } = this.state.addedStudent;
    return (
      <section>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            onChange={this.handleChange}
            placeholder="Enter student name"
          />
          <label htmlFor="startingCohort">Starting Cohort: </label>
          <input
            type="number"
            id="startingCohort"
            onChange={this.handleChange}
            placeholder="Enter starting cohort number"
          />
          <button type="submit">Add Student</button>
        </form>
        {
        Object.keys(this.state.addedStudent).length === 0 ? (
          ""
        ) : (
          <p>
            Name: {name} <br />
            Starting Cohort: {startingCohort} <br />
            Current Block: {currentBlock}
          </p>
        )}
      </section>
    );
  }

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const studentObj = this.state;
    await api.postStudent(studentObj);
    this.setState({ addedStudent: "yes" });
  };
}

export default AddStudent;

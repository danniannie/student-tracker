import React, { Component } from "react";
import * as api from "../api";
import * as utils from "../utils/utils";

class StudentProfile extends Component {
  state = {
    student: {
      blockHistory: [
        {
          _id: "5d0b478bfc0a1b04550b68d6",
          number: 1,
          name: "Core",
          slug: "core"
        }
      ]
    },
    blockHistoryObj: {},
    isLoading: true
  };

  render() {
    const { student, blockHistoryObj, isLoading } = this.state;

    return (
      <section className="stud-profile">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h4>{student.name}</h4>
            <p>Starting Cohort: {student.startingCohort}</p>
            <p>Block History:</p>
            <ul>
              <li><b>{'>'}</b> Core: {blockHistoryObj.Core}</li>
              <li><b>{'>'}</b> Back End 1: {blockHistoryObj["Back End 1"]}</li>
              <li><b>{'>'}</b> Back End 2: {blockHistoryObj["Back End 2"]}</li>
              <li><b>{'>'}</b> Front End 1: {blockHistoryObj["Front End 1"]}</li>
              <li><b>{'>'}</b> Front End 2: {blockHistoryObj["Front End 2"]}</li>
              <li><b>{'>'}</b> Project Phase: {blockHistoryObj["Project Phase"]}</li>
              <li><b>{'>'}</b> Graduated: {blockHistoryObj.Graduated}</li>
            </ul>
            <button type="submit" onClick={this.handleClick}>
              Progress Student
            </button>
          </div>
        )}
      </section>
    );
  }

  componentDidMount = async () => {
    const student = await api.fetchStudentById(this.props.id);

    const blockHistoryObj = utils.getBlockHistory(student);

    this.setState({ student, blockHistoryObj, isLoading: false });
  };

  handleClick = async () => {
    this.setState({ isLoading: true });
    const updatedStudent = await api.updateStudentbyId(this.props.id);

    this.setState({ student: updatedStudent, isLoading: false });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.student !== this.state.student) {
      const blockHistoryObj = utils.getBlockHistory(this.state.student);
      this.setState({ blockHistoryObj });
    }
  };
}

export default StudentProfile;

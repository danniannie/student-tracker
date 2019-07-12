import React, { Component } from "react";

import StudentsList from "./StudentsList";
import * as api from "../api";
import { countStudents } from "../utils/utils";

class StudentsSearch extends Component {
  state = {
    students: [],
    currentStudentCount: 0,
    isLoading: true
  };
  render() {
    const { students, currentStudentCount, isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <StudentsList
            students={students}
            currentStudentCount={currentStudentCount}
          />
        )}
      </div>
    );
  }
  componentDidMount = async () => {
    const students = await api.fetchStudents();
    const currentStudentCount = countStudents(students);
    this.setState({ students, currentStudentCount, isLoading: false });
  };
}

export default StudentsSearch;

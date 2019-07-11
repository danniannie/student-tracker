import React, { Component } from "react";
import Search from "./Search";
import StudentsList from "./StudentsList";
import * as api from '../api';

class StudentsSearch extends Component {
    state = {
        students: []
    }
    render() {
      const {students} = this.state
    return (
      <div>
        <Search />
        <StudentsList students={students}/>
      </div>
    );
  }
  componentDidMount = async () => {
    const students = await api.fetchStudents()
    this.setState({students})
  }
}

export default StudentsSearch;

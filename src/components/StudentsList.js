import React from "react";
import { Link } from "@reach/router";

const StudentsList = ({ students, currentStudentCount }) => {
  return (
    <section>
      <p>There are currently {currentStudentCount} on the course.</p>
      <ul>
        {students.map(student => {
          return (
            <li key={student._id}>
              <h4>{student.name}</h4>
              <p>Starting Cohort: {student.startingCohort}</p>
              <p>Current Block: {student.currentBlock}</p>
              <Link to={`/students/${student._id}`}>Student Profile</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default StudentsList;

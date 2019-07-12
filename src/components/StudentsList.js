import React from "react";
import { Link } from "@reach/router";

const StudentsList = ({ students, currentStudentCount }) => {
  return (
    <section >
      <p className="count">There are currently <b>{currentStudentCount}</b> students on the course.</p>
      <ul className="list">
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

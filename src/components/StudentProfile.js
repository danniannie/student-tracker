import React, { Component } from "react";
import * as api from "../api";

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
    }
  };

  render() {
    const { student } = this.state;

    return (
      <section>
        <h4>{student.name}</h4>
        <p>Starting Cohort: {student.startingCohort}</p>
        <p>Block History:</p>
        <ul>
          {student.blockHistory.map(block => {
            return <li key={block._id}>{block.name}</li>;
          })}
        </ul>
      </section>
    );
  }

  componentDidMount = async () => {
    const student = await api.fetchStudentById(this.props.id);
    // const blocksArr = student.blockHistory.map(block => {
    //   return block.name;
    // });
    // console.log(blocksArr, "<< block Arr");
    // const blockHistory = blocksArr.reduce((acc, block) => {
    //   acc[block] = (acc[block] || 0) + 1;
    //   return acc;
    // }, []);

    this.setState({ student });
  };
}

export default StudentProfile;

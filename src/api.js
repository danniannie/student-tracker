import axios from "axios";

const baseUrl = 'https://nc-student-tracker.herokuapp.com/api/students'

export const fetchStudents = async () => {
  const { data } = await axios.get(
    `${baseUrl}`
  );
  return data.students;
};

export const fetchStudentById = async (student_id) => {
    const { data } = await axios.get(`${baseUrl}/${student_id}`)
    return data.student
}
import axios from "axios";

const baseUrl = "https://nc-student-tracker.herokuapp.com/api/students";

export const fetchStudents = async () => {
  const { data } = await axios.get(`${baseUrl}`);
  return data.students;
};

export const fetchStudentById = async student_id => {
  const { data } = await axios.get(`${baseUrl}/${student_id}`);
  return data.student;
};

export const postStudent = async student => {
  const { data } = await axios.post(`${baseUrl}`, student);
  return data.student;
};

export const updateStudentbyId = async student_id => {
  const { data } = await axios.patch(`${baseUrl}/${student_id}?progress=true`);
  return data.student;
};

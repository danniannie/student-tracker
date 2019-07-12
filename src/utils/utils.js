export function getBlockHistory(object) {
  const finalObj = {
    "Back End 1": 0,
    Core: 0,
    "Back End 2": 0,
    "Front End 1": 0,
    "Front End 2": 0,
    "Project Phase": "false",
    Graduated: "false"
  };
  const blocksArr = object.blockHistory.map(block => {
    return block.name;
  });

  blocksArr.forEach(element => {
    finalObj[element] += 1;
    if (element === "Graduated") {
      finalObj[element] = "true";
    }
    if (element === "Project Phase") {
      finalObj[element] = "true";
    }
  });

  return finalObj;
}

export function countStudents(students) {
  const newArr = students.filter(student => {
    if (student.currentBlock !== "graduated") {
      return student;
    }
  });
  return newArr.length;
}

/**
 * 
 * @param {} object 
 * @returns {}
 * 
 * Object =    
 * { 
 * " "blockHistory": {
 *  "_id": string,
        "number": number,
        "name": string,
        "slug": string,
 * }[],
    "_id": string,
    "name": string,
    "startingCohort": number,
 }
 */
export function getBlockHistory(object) {
  const finalObj = {
    "Fundamentals": 0,
    "Back End": 0,
    "Front End": 0,
    "Project Phase": "false",
    Graduated: "false"
  };

  const blocksArr = object.blockHistory.map(block => {
    return block.name;
  });

  blocksArr.forEach(element => {
    finalObj[element] += 1;
    if (element === "Graduated" || element === "Project Phase") {
      finalObj[element] = "true";
    }
  });

  return finalObj;
}

export function countStudents(students) {
  return students.filter(student => student.currentBlock !== "graduated").length;
}

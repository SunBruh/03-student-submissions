"use strict";
const submissions = [
  {
    name: "Jane",
    score: 100,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 100,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 100,
    date: "2020-07-05",
    passed: true,
  },
  {
    name: "Jill",
    score: 100,
    date: "2020-04-22",
    passed: true,
  },
];

// 2

const addSubmission = (array, newName, newScore, newDate) => {
  let newPassed = null;
  newScore >= 60 ? (newPassed = true) : (newPassed = false);
  const studentInfo = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(studentInfo);
};

addSubmission(submissions, "Josh", 87, "2022-10-05");
console.log(submissions);

// 3

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, -1);
console.log(submissions);

// 4

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((student) => {
    return student.name === name;
  });
  index !== -1 ? array.splice(index, 1) : "Not Found";
};

deleteSubmissionByName(submissions, "Joe");
console.log(submissions);

// 5

const editSubmission = (array, index, score) => {
  let newScore = (array[index].score = score);
  newScore >= 60 ? (array[index].passed = true) : (array[index].passed = false);
};

editSubmission(submissions, 2, 53);
console.log(submissions);

// 6

const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Jill"));

// 7

const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((student) => {
    if (lowestScore > student.score) {
      lowestScore = student.score;
    }
  });
  return lowestScore;
};

console.log(findLowestScore(submissions));

// 8

const findAverageScore = (array) => {
  let scoreSum = 0;
  for (let student of array) {
    scoreSum += student.score;
  }
  let averageScore = scoreSum / array.length;
  return averageScore;
};

console.log(findAverageScore(submissions));

// 9

const filterPassing = (array) => {
  return array.filter((student) => {
    return student.passed === true;
  });
};

console.log(filterPassing(submissions));

// 10

const filter90AndAbove = (array) => {
  return array.filter((student) => {
    return student.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));

// challenge1

const createRange = (start, end) => {
  let counter = 0;
  let array = [];
};

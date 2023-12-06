function atLeastFive(array, operation) {
  add = [];
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
  return add.length >= 5;
}

let add = [];
let checkScores = function (array) {
  if (array >= 70) {
    add.push(array);
  }
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScores);
console.log(add);
console.log(scoreRoom1Result);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScores);
console.log(scoreRoom2Result);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScores);
console.log(scoreRoom3Result);

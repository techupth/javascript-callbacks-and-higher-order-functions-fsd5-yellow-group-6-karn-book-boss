//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let morethan70 = [];
  for (let i=0; i<array.length; i++){
    operation(array[i],morethan70);
  }
  if (morethan70.length >= 5) {
    return true
  } else {
    return false
  }
}

function checkFive(number,newpara){
  if (number > 70){
    return newpara.push(number)
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,checkFive);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,checkFive);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,checkFive);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
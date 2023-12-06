// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let newArray =[];
  for(let i=0; i<array.length; i++){
    operation(array[i] ,newArray)
  }
}

function addSalary(salary , sumArray){
  let newSalary = salary + 5000;
  console.log(newArray)
  return sumArray.push(newSalary)
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function

forEach(employeeSalaries, addSalary(newEmployeeSalaries))
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

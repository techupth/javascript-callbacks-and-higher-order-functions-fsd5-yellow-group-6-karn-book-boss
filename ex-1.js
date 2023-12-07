// Exercise #1: For Each Function

function forEach(array, operation ,newArray) {
  // Start coding here
  for(let i=0; i<array.length; i++){
    newArray.push(operation(array[i]))
  }
}

function addSalary(salary){
  let newSalary = salary + 5000;
  return newSalary;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function

forEach(employeeSalaries, addSalary ,newEmployeeSalaries)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

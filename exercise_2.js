/*

Chain some Math with Promises

Input a number, double it, increase it by 10, and then multiply by 3.

Each operation should be in a separate Promise and then chained together.

*/

function double(value) {
  return new Promise((resolve, reject) => {
    resolve(value * 2);
  });
}

function addTen(result) {
  return result + 10;
}

function multiplyByThree(result) {
  return result * 3;
}

// INPUT
const value = 5;

double(value)
  .then(addTen)
  .then(multiplyByThree)
  .then((result) => {
    console.log(result);
  });

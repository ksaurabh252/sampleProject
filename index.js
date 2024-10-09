let numArray = [2, 45, 8, 22, 61, 58, 11, 5, 8, 78, 9];
let evenResult = [];
let oddResult = [];
function printOddEven(numArray) {
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      evenResult.push(numArray[i]);
    } else {
      oddResult.push(numArray[i])
    }
  }
  return { evenResult, oddResult };


};


console.log(printOddEven(numArray));
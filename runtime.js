const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);
console.log("tinyArray: ", tinyArray);
console.log("smallArray: ", smallArray);
console.log("mediumArray: ", mediumArray);
console.log("largeArray: ", largeArray);
console.log("extraLargeArray: ", extraLargeArray);

// How long does it take to double every number in a given
// array? O(n2)

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log("Results for the extraLargeArray");
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*
console.log("insert", resultsInsert.preciseWords) results is insert 865.836804 ms
console.log("append", resultsAppend.preciseWords) results is append 3.633749 ms 

Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

The difference is that with append, you just add a new entry at the end of the list. With insert(position, new_entry) you can create a new entry exactly in the position you want.

*/

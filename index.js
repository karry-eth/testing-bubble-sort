const fastBulleSort = require('fast-bubble-sort');
const debug = require('debug');
const typescript = require('typescript');

// Revised bubbleSort test function with different test cases
function testingBubbleSort() {
  // Define test arrays for different scenarios
  const testArrays = [
    { description: "negative numbers", array: [-3, -1, -7, -4, -5, -2] },
    { description: "mixed positive and negative", array: [3, -2, 1, -5, 4, -3] },
    { description: "decimals", array: [1.1, 2.2, 0.9, 4.4, 3.3] },
    { description: "single negative element", array: [-42] },
    { description: "mixed integers and decimals", array: [3.5, 1, 4.5, 2, 5] },
    { description: "zeros", array: [0, 0, 0, 0] }
  ];

  // Function to check if an array is sorted
  const isArraySorted = (arr) => arr.every((v, i, a) => !i || a[i - 1] <= v);

  // Iterate through each test array
  testArrays.forEach((test, index) => {
    console.log(`Test ${index + 1}: ${test.description}`);
    
    // Call the bubbleSort function
    let sortedArr = bubbleSort(test.array);

    // Verify the sorting result using isArraySorted
    let isSorted = isArraySorted(sortedArr);

    // Print a message based on whether the array is correctly sorted
    console.log(`Original array: [${test.array.join(", ")}]`);
    console.log(`Sorted array: [${sortedArr.join(", ")}]`);
    console.log(`Result: The bubbleSort function ${isSorted ? "works correctly" : "does not work correctly"} for this test.\n`);
  });
}

module.exports = testingBubbleSort;

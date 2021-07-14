/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.
*/

function sortedSquaredArray(array) {
  // Write your code here.
	let i = 0, n = 0, p = array.length - 1, output = [];
	
	while (n <= p) {		
		i++
		
		if (Math.abs(array[n]) < Math.abs(array[p])) {
			output[array.length - i] = Math.pow(array[p--], 2)
		} else {
			output[array.length - i] = Math.pow(array[n++], 2)
		}
	}
	
  return output;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

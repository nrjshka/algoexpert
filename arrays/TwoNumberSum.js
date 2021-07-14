/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.


  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.


  You can assume that there will be at most one pair of numbers summing up to
  the target sum.
*/

function twoNumberSum(array, targetSum) {
	const hashTable = {}
	
	for (let i = 0; i < array.length; i++) {
		const currentSum = targetSum - array[i]
		
		if (currentSum in hashTable) {
			return [array[i], currentSum]
		} else {
			hashTable[array[i]] = i
		}
	}
	
	return []
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

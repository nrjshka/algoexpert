/*
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers 
*/

function isValidSubsequence(array, sequence) {
	let p = 0
	
	for (let i = 0; i < array.length && p < sequence.length; i++) {
		if (array[i] === sequence[p]) {
			p++
		}
	}
	
	return p === sequence.length
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;

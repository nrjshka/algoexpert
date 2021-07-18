function findThreeLargestNumbers(array) {
	const output = Array(3).fill(-Infinity)
	
	for (let i = 0; i < array.length; i++) {
		const currentValue = array[i]
		
		for (let j = output.length - 1; j >= output.length - 3; j--) {
			if (currentValue > output[j]) {
				output.splice(j + 1, 0, currentValue)
				break
			}
		}
	}
	
	return output.slice(output.length - 3)
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

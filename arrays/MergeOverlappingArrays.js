function mergeOverlappingIntervals(array) {
	const output = []
	
	array.sort((a, b) => a[0] - b[0])
	
	let [left, right] = array[0]
	
	for (let i = 1; i < array.length ; i++) {
		const [currLeft, currRight] = array[i]
		
		if (right < currLeft) {
			output.push([left, right])
			
			left = currLeft
		}
		
		if (right < currRight) {
			right = currRight
		}
	}
	
	output.push([left, right])
	
	return output
}

// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

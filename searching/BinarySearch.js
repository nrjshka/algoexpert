function binarySearch(array, target) {
	let left = 0, right = array.length - 1;
	
	while (left <= right) {
		const middle = Math.floor((left + right) / 2)
		
		if (target === array[middle]) {
			return middle
		}
		
		if (target < array[middle]) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
			
	return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

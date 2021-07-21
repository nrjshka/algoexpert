function arrayOfProducts(array) {
	const left = Array(array.length).fill(0), right = Array(array.length).fill(0)
	
	left[0] = array[0]
	right[array.length - 1] = array[array.length - 1]
	
	for (let i = 1; i < array.length; i++) {
		left[i] = left[i - 1] * array[i]
		right[array.length - i - 1] = right[array.length - i] * array[array.length - i - 1]
	}
	
	const output = [right[1]]
	
	for (let i = 1; i < array.length - 1; i++) {
		output.push(left[i - 1] * right[i + 1])
	}
	
	output.push(left[array.length - 2])
	
	return output
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 2) {
  let sum = 0;

  for (let value of array) {
    if (Array.isArray(value)) {
      sum += depth * productSum(value, depth + 1);
    } else {
      sum += value;
    }
  }

  return sum;
}

// Do not edit the line below.
exports.productSum = productSum;

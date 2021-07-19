function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const output = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1,
      right = array.length - 1;

    while (left < right) {
      const currentSum = array[left] + array[right] + array[i];

      if (currentSum === targetSum) {
        output.push([array[i], array[left], array[right]]);
      }

      if (currentSum > targetSum) {
        right--;
      } else {
        left++;
      }
    }
  }

  return output;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

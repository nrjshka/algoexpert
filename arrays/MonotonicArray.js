function isMonotonic(array) {
  if (array.length <= 2) {
    return true;
  }

  let currentStatus = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      if (currentStatus < 0) {
        return false;
      }

      currentStatus = 1;
    } else if (array[i - 1] < array[i]) {
      if (currentStatus > 0) {
        return false;
      }

      currentStatus = -1;
    }
  }

  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

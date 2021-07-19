function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    a = arrayOne[0],
    b = arrayTwo[0];
  while (i < arrayOne.length && j < arrayTwo.length) {
    const smallestDiff = Math.abs(a - b);
    const currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);

    if (currentDiff >= smallestDiff) {
      if (arrayOne[i] < arrayTwo[j]) {
        i++;
      } else {
        j++;
      }
    } else {
      a = arrayOne[i];
      b = arrayTwo[j];
    }
  }

  return [a, b];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

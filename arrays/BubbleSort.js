function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const c = array[i];

        array[i] = array[j];
        array[j] = c;
      }
    }
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

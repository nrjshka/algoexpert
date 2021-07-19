function moveElementToEnd(array, toMove) {
  let position = 0,
    count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      count++;
    } else {
      array[position++] = array[i];
    }
  }

  for (let i = array.length - 1; i > array.length - count - 1; i--) {
    array[i] = toMove;
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

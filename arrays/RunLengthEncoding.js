function runLengthEncoding(string) {
  let currentChar = string[0],
    count = 1,
    output = "";

  for (let i = 1; i < string.length; i++) {
    if (currentChar !== string[i]) {
      output += `${count}${currentChar}`;
      count = 1;
      currentChar = string[i];
    } else {
      count++;
    }

    if (count >= 10) {
      output += `9${currentChar}`;
      count = 1;
    }
  }

  output += `${count}${currentChar}`;

  return output;
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;

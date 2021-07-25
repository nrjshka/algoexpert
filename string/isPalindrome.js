function isPalindrome(string) {
  const midPositionOfString = Math.floor((string.length - 1) / 2);
  for (let i = string.length - 1; i >= midPositionOfString; i--) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

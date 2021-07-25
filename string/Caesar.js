function caesarCipherEncryptor(string, key) {
  // 97 -> 122
  const startOfASCII = 97;
  const charMap = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + startOfASCII));

  let output = "";

  for (let i = 0; i < string.length; i++) {
    const currentASCIICode = string[i].charCodeAt() - startOfASCII;
    output += charMap[(currentASCIICode + key) % charMap.length];
  }

  return output;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;

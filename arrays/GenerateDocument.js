function generateDocument(characters, document) {
  if (!characters || !document) {
    return true;
  }

  const dictionary = {};

  for (let i = 0; i < document.length; i++) {
    dictionary[document[i]] = (dictionary[document[i]] || 0) + 1;
  }

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] in dictionary) {
      dictionary[characters[i]]--;
    }

    if (dictionary[characters[i]] === 0) {
      delete dictionary[characters[i]];
    }
  }

  return !Object.keys(dictionary).length;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;

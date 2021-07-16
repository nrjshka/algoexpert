function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

  let count = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    count += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return count;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

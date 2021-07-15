function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort()
	blueShirtHeights.sort()
	
	const redFirst = redShirtHeights[redShirtHeights.length - 1] > blueShirtHeights[blueShirtHeights.length - 1]
	
	for (let i = 0; i < redShirtHeights.length; i++) {
		if (redFirst && redShirtHeights[i] <=  blueShirtHeights[i]) {
			return false
		} else if (!redFirst && redShirtHeights[i] >=  blueShirtHeights[i]) {
			return false
		}
	}
	
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;

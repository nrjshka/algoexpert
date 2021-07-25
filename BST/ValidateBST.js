// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
	if (!tree) {
		return true
	}
	
	if (tree.value < minValue || tree.value >= maxValue) {
		return false
	}
	
	return validateBst(tree.left, minValue, Math.min(maxValue, tree.value)) 
					&& validateBst(tree.right, Math.max(minValue, tree.value), maxValue)
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

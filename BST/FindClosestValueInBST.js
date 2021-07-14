function findClosestValueInBst(tree, target) {
	let closest = tree.value

	while (tree) {
		if (Math.abs(target - closest) > Math.abs(tree.value - target)) {
			closest = tree.value
		}
		
		if (target > tree.value) {
			tree = tree.right
		} else {
			tree = tree.left
		}
	}
	
	return closest
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0) {
	if (!root) {
		return []
	}
	
	if (!root.left && !root.right) {
		return [sum + root.value]
	}
	
	return [...branchSums(root.left, sum + root.value), ...branchSums(root.right, sum + root.value)]
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

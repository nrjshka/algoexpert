function nodeDepths(root, currentDepth = 0) {
	if (!root) {
		return 0
	}
	
	if (!root.left && !root.right) {
		return currentDepth
	}
	
	return currentDepth + nodeDepths(root.left, currentDepth + 1) + nodeDepths(root.right, currentDepth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;

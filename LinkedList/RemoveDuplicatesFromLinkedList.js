// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let currentNode = linkedList
	
	while (currentNode.next) {
		if (currentNode.next.value === currentNode.value) {
			currentNode.next = currentNode.next.next
		} else {
			currentNode = currentNode.next
		}
	}
	
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

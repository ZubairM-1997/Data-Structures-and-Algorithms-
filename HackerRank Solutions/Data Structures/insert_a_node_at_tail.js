// // You are given the pointer to the head node of a linked list and an integer to add to the list.
// Create a new node with the given integer.
// Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node.
// The given head pointer may be null, meaning that the initial list is empty.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

 class Node {
	 constructor(data, next = null){
		this.data = data
		this.next = next

	 }
 }

function insertNodeAtTail(head, data) {

	//creating a new Node with the data attached to it
	tempNode = new Node;
	tempNode.data = data;
	tempNode.next = null
	let nodePointer = head


	if(head === null){
		//if the head is null, the tempNode we created is now the head
		head = tempNode
		return tempNode
	}

	//check if the list is empty
	while(nodePointer.next !== null){
		nodePointer = nodePointer.next
	}

	// find the last element of the linkedlist
	nodePointer.next = tempNode;

	return head


}
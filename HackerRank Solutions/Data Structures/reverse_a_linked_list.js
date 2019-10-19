// You’re given the pointer to the head node of a linked list.
// Change the next pointers of the nodes so that their order is reversed.
// The head pointer given may be null meaning that the initial list is empty.


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(head) {

	if (head === null){
		return head;
	}

	let previous = null
	let current_node = head;

	//iterative solution to reverse a linkedlist, same solution to print_in_reverse.js
	while(current_node !== null){
		let next_node = current_node.next
		current_node.next = previous
		previous = current_node
		current_node = next_node
	}



	head = previous
	return previous


}
//Given a pointer to the head node of a linked list
// print its elements in order
// one element per line
// if the head pointer is null, dont print anything


// The first line of input contains , the number of elements in the linked list.
// The next  lines contain one element each, which are the elements of the linked list.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {

	while(head !== null){
		console.log(head.data)
		head = head.next
	}


}
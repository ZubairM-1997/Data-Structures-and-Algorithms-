//You’re given the pointer to the head nodes of two sorted linked lists.
// The data in both lists will be sorted in ascending order.
//Change the next pointers to obtain a single, merged linked list which also has data in ascending order.
//Either head pointer given may be null meaning that the corresponding list is empty.


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function mergeLists(head1, head2) {
	if (head1 === null){
		return head2
	}

	if(head2 === null){
		return head1
	}


	// creating a new list
	let head3 = null;
	if(head1.data < head2.data){
		head3 = head1
		head1 = head1.next
	}

	else{
		head3 = head2
		head2 = head2.next
	}

	let current_node = head3;

	//looping through the two lists simultaneously
	while(head1 !== null && head2 !== null){
		//check which values are smaller
		if (head1.data < head2.data){
			current_node.next = head1;
			head1 = head1.next

		} else {
			current_node.next = head2;
			head2 = head2.next
		}

		current_node = current_node.next;
	}


	if (head1 === null){
		current_node.next = head2;
	} else{
		current_node.next = head1;
	}

	return head3
}
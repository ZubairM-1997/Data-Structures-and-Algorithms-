// You are given the pointer to the head node of a linked list and you need to print all its elements in reverse order from tail to head,
// one element per line.
// The head pointer may be null meaning that the list is empty - in that case, do not print anything!


class Node{
	constructor(data, next = null){
		this.data = data;
		this.next = next
	}
}

function reversePrint(head){



	if (head === null){
		return head;
	}

	let previous = null
	let current_node = head;

	//iterative solution to reverse a linkedlist
	while(current_node !== null){
		let next_node = current_node.next
		current_node.next = previous
		previous = current_node
		current_node = next_node
	}


	//printing the values of the reversed linked list
	head = previous
	while(head !== null){
		console.log(head.data)
		head = head.next
	}


}
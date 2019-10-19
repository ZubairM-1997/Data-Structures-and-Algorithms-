// //You’re given the pointer to the head node of a linked list and an integer to add to the list.
//  Create a new node with the given integer, insert this node at the head of the linked list and return the new head node.
// The head pointer given may be null meaning that the initial list is empty.

class Node {
	constructor(data, next = null){
	   this.data = data
	   this.next = next

	}
}


function insertNodeAtHead(head, data){

	//first we create a new node wit the data
	let tempNode = new Node
	tempNode.data = data
	tempNode.next = null



	if(head === null){
		//if the head is null, initial list is empty
		//the tempNode we created is now the head
		head = tempNode
		return tempNode
	} else {
		// if head is not null
		// the next of the tempNode we created is set to the head passed
		tempNode.next = head
		return tempNode


	}


}
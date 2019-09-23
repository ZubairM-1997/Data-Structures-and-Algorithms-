class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

//a Linked list has a pointer to the head and tail, also has a length
class SinglyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0
	}

	// this function should accept a value
	// create a new node using the value passed to the function
	// if there is no head property on the list, set the head and tail to the newly created node
	// otherwise set the property on the tail to be the new node
	// and set the property on the list to be the newly created node

	push(val){
		var newNode = new Node(val)
		//if there is no head on the linked list, head and tail is set to the newNode
		if (!this.head){
			this.head = newNode;
			this.tail = this.head


		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;

	}

	// if there are no nodes in the list, return undefined
	// loop through the list until you reach the tail
	// set the next property of the 2nd to last node to be null

	pop(){
		if (this.length === 0){
			return undefined;
		}

		// while you are traversing through a linked list
		//at the beginning, the head and tail are the same

		var current = this.head;
		var newTail  = current;

		// while current.next exists
		// newTail is set to the current
		// current is set to the next node on the list
		while(current.next){
			newTail = current;
			current = current.next;
		}

		// the tail of the linked list is set to the newTail
		// the next property of the newTail is set to null which severs the connection
		//length is decremented by 1
		// the severed node is returned
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		return current

	}

	//if there are no nodes, return undefined
	// store the current head property in a variable
	// set the head property to be the current heads next property

	shift(){
		if (this.length === 0){
			return undefined;
		}

		var current = this.head;
		this.head = current.next;
		this.length--

		return current;

	}
}


var list = new SinglyLinkedList()
list.push("PUSH")
list.push("GOODBYE")
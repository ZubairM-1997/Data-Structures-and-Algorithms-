class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor(){
		this.first =  null;
		this.last = null;
		this.size = 0;
	}

	push(val){
		//if there are no nodes in the stack, set the first and last property to new node that is created
		var newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		} else {
			// if there is atleast one node
			// create a variavle that stores the current first property on stack
			// reset the first property to the newly created node
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}

		return ++this.size
	}

	pop(){
		// if there are no nodes in the stack return null
		if(!this.first) return null
		//create a temporary variable to store the first property on the stack

		var temp = this.first;
		// if there is only one node, set first and last property to null
		if (this.first === this.last){
			this.last = null;
		}
		// if there is more than one node, set the first property to be the next property on the current first

		this.first = this.first.next
		// decrement size by 1
		this.size--;
		//return value of node removed
		return temp.value;

	}
}
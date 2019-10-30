class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// adding an element at the last position of the Queue
	enqueue(val){
		// Create a new node using that value passed to the function
		let newNode = new Node(val)
		//If there are no nodes in the queue, set this node to the first and last property
		if(!this.first){
			this.first = newNode;
			this.last = newNode
		} else {
		// otherwise, set the next property on the current last to be that node
		//then set the last property of the queue to be that node
			this.last.next = newNode
			this.last = newNode
		}

		return ++this.size

	}

	//removing an element at the first position of the Queue
	dequeue(){
		// if there is no first property, just return null
		if (!this.first){
			return null
		}
		// store the first property in a variable
		let temp = this.first


		// see if the first is the same as the last (check if theres only one node)
		if (this.first === this.last){
			//if so, set the first and last to be null
			this.last = null;
		}

		//if there is more than 1 node, set the first property to be the next property of the first
		this.first = this.first.next

		//decrement the size by 1
		--this.size

		//return the value of the node dequeued
		return temp.value

	}
}
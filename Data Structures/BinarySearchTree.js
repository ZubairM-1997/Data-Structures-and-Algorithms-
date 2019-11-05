class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}


	//  	 10
	//  5 			13
	//2   7		11		16

	insert(value){
		//create a new node
		let newNode = new Node(value);
		// starting at the root
		//check if there is a root, if not, the root becomes the new node
		if (this.root === null){
			this.root = newNode;
			return this;
		} else {
		// if there is a root. check if the value of the new node is greater or less than the value of root
			let current = this.root;
			while(true){

				// if it is less
				if (value < current.value){
					//check to see if there is a node to the left
					if(current.left === null){
						//if there is not, add that node as the left property
						current.left = newNode;
						return this;
					} else {
						//if there is, move to that node and repeat these step
						current = current.left;


					}
				} else if (value >)
			}

		}


			// if it is greater
				//check to see if there is a node to the right
				//if there is, move to that node and repeat these steps
				// if there is not, add that node as the right property



				s



	}
}
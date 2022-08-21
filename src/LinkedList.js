// constructor for new linked list

function LinkedList() {
	this.head = null;
	this.size = 0;
}

// constructor for new node

function Node(val) {
	this.val = val;
	this.next = null;
}

// create add method for LinkedList

LinkedList.prototype.add = function (val) {
	//check if head is null
	if (this.head === null) {
		this.head = new Node(val);
	} else {
		//if head isn't null make oldHead this.head
		let oldHead = this.head;
		// reassign this.head to newNode(val)
		this.head = new Node(val);
		this.head.next = oldHead;
	}
	return this.size++;
};

const testLinkedList = new LinkedList();
testLinkedList.add(4);
testLinkedList.add(5);
testLinkedList.add(6);
testLinkedList.add(7);
//console.log(testLinkedList);

// create delete method for LinkedList

LinkedList.prototype.delete = function (val) {
	//traverse the list, checking each node for the val
	let currentNode = this.head;
	//check the 1st node, the head, against val
	if (currentNode.val === val) {
		//if it's located, do something and show something
		this.head = currentNode.next;
		this.size--;
	} else {
		//if it's not there, continue on
		let prev = currentNode;
		while (currentNode.next) {
			//check the currentNode against val
			if (currentNode.val === val) {
				prev.next = currentNode.next; //prev next pointer becomes the currentNode's next point

				let result = currentNode.val; // create placeholder for the node that checked true against val
				prev = currentNode; // skipping the currentNode, deletes it from the list.

				currentNode = currentNode.next; //confirmation of node removal by making the currentNode the next node

				this.size--;

				return result; //exit while loop show deleted value
			}
			//continue the search
			prev = currentNode;
			currentNode = currentNode.next;
		}
		if (currentNode === null)
			//end of the list
			return undefined; //return if value was not found.
	}
};

// console.log(testLinkedList);
// console.log(testLinkedList.head)
// console.log(testLinkedList.head.next)

console.log("result of delete 5 ->", testLinkedList.delete(5));
console.log("this should be undefined ->", testLinkedList.delete(9));
console.log(testLinkedList.head);
console.log(testLinkedList.size);

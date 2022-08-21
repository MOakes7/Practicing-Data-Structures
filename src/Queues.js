//creating a queue with add and delete methods

//native array methods

function Queue() {
	this.queue = [];
}

Queue.prototype.enqueue = function (val) {
	this.queue.push(val);
};

Queue.prototype.dequeue = function () {
	this.queue.shift();
};

let testQueue = new Queue();
testQueue.enqueue(2);
testQueue.enqueue(3);
testQueue.enqueue(9);
testQueue.enqueue(1);

//console.log(testQueue);

testQueue.dequeue();

//console.log(testQueue);

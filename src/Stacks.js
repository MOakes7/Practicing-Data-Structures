//create the stack with an empty array

function Stack() {
	this.stack = [];
}

Stack.prototype.push = function (val) {
	this.stack.push(val);
};

let testStack = new Stack();
testStack.push(2);
testStack.push(3);
testStack.push(9);
testStack.push(1);

// console.log(testStack);

Stack.prototype.pop = function () {
	this.stack.pop();
};

testStack.pop();
//console.log(testStack)

/**
 * Now not using any native array methods
 */

function StackTwo() {
	this.stack = [];
	this.index = 0;
}

StackTwo.prototype.push = function (val) {
	this.stack[this.index] = val;
	this.index += 1;
};

let newTestStack = new StackTwo();
newTestStack.push(1);
newTestStack.push(2);
newTestStack.push(3);
newTestStack.push(4);

// console.log(newTestStack);

StackTwo.prototype.pop = function () {
	if (this.index === 0) return undefined;
	this.index -= 1;
	return this.stack[this.index];
};

newTestStack.pop();
newTestStack.pop();
// console.log(newTestStack);

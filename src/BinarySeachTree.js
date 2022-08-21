function Tree() {
	this.root = null;
}

function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

// create the initial root value
Tree.prototype.add = function (val) {
	const newNode = new Node(data);
	if (!this.root) {
		this.root = newNode;
	} else {
		this.insert(this.root, newNode);
	}
};

// create insert method to add a node to the tree
Tree.prototype.insert = function (node, newNode) {
	if (newNode.data < node.data) {
		if (!node.left) {
			node.left = newNode;
		} else {
			this.insert(node.left, newNode);
		}
	} else {
		if (!node.right) {
			node.right = newNode;
		} else {
			this.insert(node.right, newNode);
		}
	}
};

Tree.prototype.remove = function (val) {
	this.root = this.delete(this.root, val);
};

Tree.prototype.delete = function (node, val) {
	if (!node) {
		return null;
	}
	if (val < node.val) {
		node.left = this.delete(node.left, val);
		return node;
	} else if (val > node.val) {
		node.right = this.delete(node.right, val);
		return node;
	} else {
		if (!node.left && !node.right) {
			node = null;
			return node;
		}
		if (!node.left) {
			node = node.right;
			return node;
		}
		if (!node.right) {
			node = node.left;
			return node;
		}
		let min = this.findMinNode(node.right);
		node.val = min.val;
		node.right = this.delete(node, right, min.val);
		return node;
	}
};

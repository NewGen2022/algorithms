import Node from './node.js';

export default class Tree {
    constructor (array) {
        this.root = this.buildTree(array);

        // console.log(this.root);
        this.prettyPrint(this.root, '     ');
    }

    sortRemoveDuplicates (array) {
        return [...new Set(array)].sort((a, b) => a - b)
    }

    minValue(root) {
        let min = root.data;

        while (root.left != null) {
          min = root.left.data;
          root = root.left;
        }

        return min;
    }

    // takes an array of data and turns it into a balanced binary tree full of Node 
    // objects appropriately placed (sort and remove duplicates!). 
    // returns the level-0 root node.
    buildTree(array) {
        if (array.length === 0) return null;

        const sortedArray = this.sortRemoveDuplicates(array);

        const mid = Math.floor(array.length / 2);

        const root = new Node(
            sortedArray[mid], // root
            this.buildTree(sortedArray.slice(0, mid)), // left
            this.buildTree(sortedArray.slice(mid + 1)) // right
        )

        return root
    }

    // insert given value
    insert (value, root=this.root) {
        if (root === null) return new Node(value);

        root.data < value
          ? (root.right = this.insert(value, root.right))
          : (root.left = this.insert(value, root.left));
        return root;
    }

    // delete given value
    delete (value, root=this.root) {
        if (root === null) return root;

        if (root.data < value) root.right = this.delete(value, root.right);
        else if (root.data > value) root.left = this.delete(value, root.left);
        else {
            if (root.left === null) return root.right;
            else if (root.right === null) return root.left;
            root.data = this.minValue(root.right);
            root.right = this.delete(value, root.right);
        }

        return root;
    }

    // returns the node with the given value
    find (value, root=this.root) {
        const node = root;

        if (node === null) return null;

        if (node.data !== value) {
          return node.data < value
            ? this.find(value, node.right)
            : this.find(value, node.left);
        }

        return node;
    }

    // accepts an optional callback function as its parameter. 
    // traverse the tree in breadth-first level order and provide each 
    // node as an argument to the callback. As a result, the callback 
    // will perform an operation on each node following the order in which they are traversed. 
    levelOrder (callback) {
        if (!this.root) return [];

        const queue = [this.root];

        const results = [];

        while (queue.length) {
            let level = [];
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                
                level.push(node.data);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);

                if (callback) callback(node);
            }
            results.push(level);
        }
        if (!callback) return results;
    }

    // accept an optional callback as a parameter. Each of these 
    // functions (inOrder, preOrder, postOrder) should traverse the tree in their respective depth-first 
    // order and yield each node to the provided callback. The functions 
    // return an array of values if no callback is given as an argument.
    // LEFT ROOT RIGHT
    inOrder(node = this.root, callback, result = []) {
        if (!this.root) return [];

        if (node === null) return;

        this.inOrder(node.left, callback, result);

        callback ? callback(node) : result.push(node.data);

        this.inOrder(node.right, callback, result);

        if (result) return result;
    }
    
    // ROOT LEFT RIGHT
    preOrder (callback) {
        if (!this.root) return [];

        const stack = [this.root];

        const results = [];

        while (stack.length) {
          const node = stack.pop();

          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);

          if (callback) callback(node);

          results.push(node.data);
        }
        if (!callback) return results;
    }

    // LEFT RIGHT ROOT
    postOrder (callback) {
        if (!this.root) return [];

        const stack = [this.root];

        const results = [];

        while (stack.length) {
          const node = stack.pop();

          if (node.left) stack.push(node.left);
          if (node.right) stack.push(node.right);

          if (callback) callback(node);

          results.push(node.data);
        }
        if (!callback) return results.reverse();
    }

    // returns the given node’s height. Height is defined as the number 
    // of edges in the longest path from a given node to a leaf node.
    height (node=this.root) {
        if (node === null) return -1;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    // returns the given node’s depth. Depth is defined as the number 
    // of edges in the path from a given node to the tree’s root node.
    depth (node) {
        if (!node) return null;

        if (root === null) return 0;

        if (root.data === node.data) return level;

        let count = this.depth(node, root.left, level + 1);

        if (count !== 0) return count;

        return this.depth(node, root.right, level + 1);
    }

    // checks if the tree is balanced. A balanced tree is one where the 
    // difference between heights of the left subtree and the right subtree 
    // of every node is not more than 1.
    isBalanced (node=this.root) {
        if (node === null) return true;

        const heightDiff = Math.abs(
            this.height(node.left) - this.height(node.right)
        );

        return (
            heightDiff <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right)
        );
    }

    // rebalances an unbalanced tree
    reBalance () {
        if (this.root === null) return;

        const sorted = [...new Set(this.inOrder().sort((a, b) => a - b))];
        this.root = this.buildTree(sorted);
    }

    // visualize binary search tree in a structured format.
    // This function will expect to receive the root of 
    // tree as the value for the node parameter.
    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}
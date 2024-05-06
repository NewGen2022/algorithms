import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adds a new node containing value to the end of the list
    append (value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return true;
    }

    // adds a new node containing value to the start of the list
    prepend (value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        this.length++;

        return true;
    }

    // returns the total number of nodes in the list
    get size () {
        return this.length;
    }

    // returns the first node in the list
    getHead () {
        return this.head;
    }

    // returns the last node in the list
    getTail () {
        return this.tail;
    }

    // returns the node at the given index
    at (index) {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index ${index} out of bounds`);
        }

        let currentNode = this.head;
        let i = 0;

        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode;
    }

    // removes the last element from the list
    pop () {
        if (!this.head) {
            throw new Error('Nothing to pop(');
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        if (previousNode) {
            previousNode.next = null;
            this.tail = previousNode;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;

        return currentNode;
    }

    // returns true if the passed in value is in the list and otherwise returns false
    contains (value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }

    // returns the index of the node containing value, or null if not found
    find (value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }

        return null;
    }

    // represents your LinkedList objects as strings, so you can print them out 
    // and preview them in the console. The format should be: 
    // ( value ) -> ( value ) -> ( value ) -> null
    toString () {
        const result = [];
        let currentNode = this.head;

        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        result.push('null');

        return result.join(' -> ');
    }

    // inserts a new node with the provided value at the given index
    insertAt (value, index) {
        if (index === 0) {
            this.prepend(value);
            return true;
        }

        if (index < 0 || index > this.length) {
            return false;
        }

        const newNode = new Node(value);
        
        let currentNode = this.head;
        let previousNode = null;
        let i = 0;

        while (i < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }

        newNode.next = currentNode;
        previousNode.next = newNode;

        if (index === this.length) {
            this.tail = newNode;
        }

        this.length++;

        return true;
    }

    // removes the node at the given index
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let currentNode = this.head;
        let previousNode = null;
        let i = 0;

        while (i < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }

        if (!previousNode) {
            this.head = currentNode.next;
        } else {
            previousNode.next = currentNode.next;
        }

        if (index === this.length - 1) {
            this.tail = previousNode;
        }

        this.length--;
        
        return currentNode.value;
    }    
}
import LinkedList from "./linkedList.js";

const list = new LinkedList();

// testing methods: append, prepend
list.prepend(0);

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.prepend(5);

// testing method: size
const linkedListSize = list.size;
console.log('Size of Linked list:', linkedListSize);

// testing method: getHead
const headOfList = list.getHead();
console.log('Head of Linked list:', headOfList.value);

// testing method: getTail
const tailOfList = list.getTail();
console.log('Tail of Linked list:', tailOfList.value);

// testing method: at
let index1 = 3
let index2 = 9
let index3 = -1

try {
    const nodeAtIndex1 = list.at(index1);
    console.log(`At index ${index1} node: ${nodeAtIndex1}`);
} catch (error) {
    console.log(`Error at index ${index1}: ${error.message}`);
}

try {
    const nodeAtIndex2 = list.at(index2);
    console.log(`At index ${index2} node: ${nodeAtIndex2}`);
} catch (error) {
    console.log(`Error at index ${index2}: ${error.message}`);
}

try {
    const nodeAtIndex3 = list.at(index3);
    console.log(`At index ${index3} node: ${nodeAtIndex3}`);
} catch (error) {
    console.log(`Error at index ${index3}: ${error.message}`);
}

// testing method: pop
let poppedNode = list.pop();
console.log('Popped value from list:', poppedNode);

// testing method: contains
const value1 = 3;
const value2 = 9;

const containsValue1 = list.contains(value1);
const containsValue2 = list.contains(value2);

console.log(`Is list contains ${value1}: ${containsValue1}`);
console.log(`Is list contains ${value2}: ${containsValue2}`);

// testing method: find
const valueIndex1 = 3;
const valueIndex2 = 9;

const containsValueIndex1 = list.find(value1);
const containsValueIndex2 = list.find(value2);

console.log(`Find ${valueIndex1} at index ${containsValueIndex1}`);
console.log(`Find ${valueIndex2} at index ${containsValueIndex2}`);

// testing method: insertAt
const value = -22;
const index = 3;

const isInserted = list.insertAt(value, index);
console.log('Is value inserted?', isInserted);

// testing method: toString
let linkedListStr = list.toString();
console.log('Linked list:', linkedListStr);

// testing method: removeAt
const indexToRemoveAt = 2;

const removedValue = list.removeAt(indexToRemoveAt);
console.log(`Node removed at index ${removedValue}:`, removedValue);

// testing method: toString
linkedListStr = list.toString();
console.log('Linked list:', linkedListStr);
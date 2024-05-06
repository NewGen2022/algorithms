import Tree from "./tree.js";


const randomArray = (size, maxNumber) => {
    return Array.from({length: size}, () => Math.floor(Math.random() * maxNumber));
}

const SIZE = 10
const MAX = 101

const tree = new Tree(randomArray(SIZE, MAX));

console.log('Is tree balanced?: ', tree.isBalanced());
console.log('Lever Order =>', tree.levelOrder());
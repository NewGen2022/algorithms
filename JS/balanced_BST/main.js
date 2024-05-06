import Tree from "./tree.js";


const randomArray = (size, maxNumber) => {
    return Array.from({length: size}, () => Math.floor(Math.random() * maxNumber));
}

const SIZE = 50;
const MAX = 100;

const tree = new Tree(randomArray(SIZE, MAX));

console.log('\x1b[34m   Is tree balanced?:\x1b[0m', tree.isBalanced());
console.log('\x1b[95mLever Order:\x1b[0m', tree.levelOrder());
console.log('\x1b[34m   PreOrder:\x1b[0m', tree.preOrder());
console.log('\x1b[95mInOrder:\x1b[0m', tree.inOrder());
console.log('\x1b[34m    PostOrder:\x1b[0m', tree.postOrder());

for (let i = 0; i < 5; i++) {
    tree.insert(Math.floor(Math.random() * 20));
}

console.log('Balanced:', tree.isBalanced());

tree.reBalance();

console.log('\x1b[34m   Is tree balanced?:\x1b[0m', tree.isBalanced());
console.log('\x1b[95mLever Order:\x1b[0m', tree.levelOrder());
console.log('\x1b[34m   PreOrder:\x1b[0m', tree.preOrder());
console.log('\x1b[95mInOrder:\x1b[0m', tree.inOrder());
console.log('\x1b[34m    PostOrder:\x1b[0m', tree.postOrder());
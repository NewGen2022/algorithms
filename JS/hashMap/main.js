import HashMap from './hashMap.js';

const hashMap = new HashMap();


// testing method: set
const isSet = hashMap.set('one', 1);
console.log('Is value set?:', isSet);

// testing method: get
const getValue1 = hashMap.get('one');
console.log('Get value:', getValue1);

const getValue2 = hashMap.get('two');
console.log('Get value:', getValue2);

// testing method: has
const has1 = hashMap.has('one');
console.log('Is table has value "one":', has1);

const has2 = hashMap.has('two');
console.log('Is table has value "two":', has2);

// testing method: remove
const deleted1 = hashMap.remove('one')
console.log('Deleted value:', deleted1);

const deleted2 = hashMap.remove('one')
console.log('Deleted value:', deleted2);

//
hashMap.set('one', 1);
//

// testing method: length
let tableLength = hashMap.length;
console.log('Current table length:', tableLength);

//
hashMap.set('one', 1);
hashMap.set('two', 2);
hashMap.set('three', 3);
hashMap.set('four', 4);
//

tableLength = hashMap.length;
console.log('Current table length:', tableLength);

// testing method: clear
hashMap.clear();

tableLength = hashMap.length;
console.log('Current table length:', tableLength);

//
hashMap.set('one', 1);
hashMap.set('two', 2);
hashMap.set('three', 3);
hashMap.set('four', 4);
//


// testing method: keys
const keys = hashMap.keys();
console.log(keys);
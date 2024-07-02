
ES6 Data Manipulation: map, filter, and reduce
ES6 introduced powerful array methods that make data manipulation easier: map, filter, and reduce.

map
The map method creates a new array populated with the results of calling a provided function on every element in the calling array.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
filter
The filter method creates a new array with all elements that pass the test implemented by the provided function.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
reduce
The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

javascript
Copy code
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
Typed Arrays
Typed arrays provide a mechanism for accessing raw binary data, which is essential for handling binary data in web applications.

javascript
Copy code
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);

int32View[0] = 42;
console.log(int32View[0]); // 42
The Set, Map, and Weak Data Structures
Set
A Set is a collection of values where each value must be unique.

javascript
Copy code
const mySet = new Set([1, 2, 3, 3]);
mySet.add(4);
mySet.delete(2);
console.log(mySet); // Set(3) { 1, 3, 4 }
Map
A Map holds key-value pairs where the keys can be any datatype.

javascript
Copy code
const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);

console.log(myMap.get('a')); // 1
console.log(myMap.has('b')); // true
myMap.delete('b');
console.log(myMap.size); // 1
WeakSet
A WeakSet is similar to a Set but only holds objects and they are held weakly, meaning if there are no other references to the object, they can be garbage collected.

javascript
Copy code
let obj1 = {a: 1};
let obj2 = {b: 2};

const myWeakSet = new WeakSet([obj1, obj2]);
console.log(myWeakSet.has(obj1)); // true

obj1 = null;
// obj1 is now eligible for garbage collection
WeakMap
A WeakMap is similar to a Map but only holds objects as keys and they are held weakly, which allows for garbage collection.

javascript
Copy code
let obj1 = {a: 1};
let obj2 = {b: 2};

const myWeakMap = new WeakMap();
myWeakMap.set(obj1, 'value1');
myWeakMap.set(obj2, 'value2');

console.log(myWeakMap.get(obj1)); // 'value1'

obj1 = null;
// obj1 is now eligible for garbage collection
These ES6 features enhance the ability to manipulate and handle data efficiently in JavaScript.

Explanation:
WeakMap Initialization:

weakMap is initialized as a WeakMap instance and exported.
Function Implementation:

queryAPI function accepts an endpoint object.
It checks if the endpoint is already in the WeakMap and gets the current count of calls. If it's not present, it initializes the count to 0.
The count is incremented by 1.
The updated count is set back in the WeakMap.
If the count reaches 5 or more, an error is thrown with the message "Endpoint load is high".

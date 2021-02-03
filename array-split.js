const numbers = [1,2,3,4,5,6,7,8,9,10];


// using slice
const part = numbers.slice(2,5);    // getting specific elements from an array
console.log(part);
console.log(numbers);


// using splice
const removed = numbers.splice(2,5);    // removing elements from the original array
console.log(removed);
console.log(numbers);


// using splice
const removeAdd = numbers.splice(2,5, 55, 33, 44);    // removing elements and then add new in that place in the original array
console.log(removeAdd);
console.log(numbers);


const together = numbers.join(" -added- ");     // adding some specific items to the array using join
console.log(together);
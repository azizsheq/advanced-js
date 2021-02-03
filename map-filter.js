const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];


for (let i =0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(numbers);
console.log("Square is : ", output);


// using map
// map function can take three parameters in max
// are - > element(each of the elements of the array),
//         index(index number of each of the elements)
//         array(the full array)
console.log("Using map to Display all Parameters of map function - \n");
numbers.map(function displayAllParameters(element, index, array){
    console.log(element, index, array);
})


// // a function to do square
// function makeSquare(element){
//     return element * element;
// }

// // writing the function using arrow
const makeSquare = element => element * element;
// or
// const makeSquare = num => num * num;

const output2 = numbers.map(makeSquare);    // calling the square function inside map
// OR
// const output2 = numbers.map(num => num * num);   // declaring arrow function inside the map
console.log("Square Using Map : \n", output2);


// uses of filter
const number1 = [2, 3, 4, 5, 6, 7, 8, 9];
const maxElement = number1.filter(num => num > 5);
console.log("Using filter to get values > 5 : \n", maxElement);


// uses of find 
const number2 = [2, 3, 4, 5, 6, 7, 8, 9];
const findMax = number2.find(num => num > 2);
console.log("Using find to get value > 5 : \n", maxElement);

let name; // this variable is undefined
console.log(name);


let nameTwo = undefined;
console.log(nameTwo); // if the variable is declared as undefined the it's become undefined


// null that means there is no value
// undefined that means which is not available


// if a function don't return any value then it's having undefined
function addNum(num1, num2){
    console.log(num1 + num2);
    return
    // if the return also don't have any thing to return then it's also an undefined
}
const result = addNum(12, 13);
console.log(result);


function addNum1(num1, num2){
    console.log(num1, num2);
}
const result1 = addNum1(12); 
// while using a function parameter if we didn't pass all the values then the remaining will be undefined
console.log(result1);

const student = {name: "Kamal", id: "123456"};
console.log(student.name);
// if from a object we are trying to access some values which is not available inside the object then it will be undefined
console.log(student.phone); 
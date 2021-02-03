let bonus = 22; // global variable / global scope

// let and const are scope variable and unable to access out of block

function sum(first, second){
    let result  = first + second + bonus;

    if(result > 9){
        // if there is a var then while reading the code it will be passed to upside and then it can be accessible from any where
        // this is called as wasting
        // if there is a var in a scope then it will be passed to parent and that's wasting
        var str = "inside block"
        const mood = "HAPPY";
        console.log(mood);
    }
    // console.log(mood);   // cannot call the const / let variable out of the block, that's a scope
    console.log(str);       // but can be accessible if it's called as var
    return result;
}

const output  = sum(3, 7);
// console.log(result); // cannot call the variable which is in the function
console.log(bonus);
console.log(output);
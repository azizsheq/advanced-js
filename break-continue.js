const numbers = [1,2,3,4,5,6,7,8,9,10];

for( let  i = 0; i < numbers.length; i++) {
    if(numbers[i] > 3) {
        break;  // using break to stop the loop when condition is matching
    }
    console.log(numbers[i]);
}

console.log("\n\n");

const num = [1,2,-3,4,-5,6,-7,8,-9,10];

for( let  i = 0; i < num.length; i++) {
    if(num[i] < 0) {
        continue;  // using continue to skip the values which are matching with the condition
    }
    console.log(numbers[i]);
}
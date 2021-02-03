function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

//if a function is being returned or called from a function then it make a block / closed area which is closure

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());  // stopped at 4 


const clock2 = stopWatch();
console.log(clock2());  // another one starting from 1 again
console.log(clock2());

console.log(clock1());  // again starting from 5 
console.log(clock1());
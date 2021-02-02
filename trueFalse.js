const age = 0;
// const age = 1;
// in a true false condition if the value is zero the condition will be FALSE
// but if the value is any other number except zero then the condition will be TRUE
if(age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
// const name = "Salman";
const name = undefined;
// all string are TRUE except empty string such as "" but if the string having a empty space inside it then it's also TRUE
// only empty string "" is FALSE in js
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// all the FALSY values are - 
    // false
    // 0
    // ""
    // undefined
    // null
    //NaN

// all the TRUTHY values are - 
    // '0'
    // ' '
    // []
    // 'false'
    // all other values except 0 or empty string
const student= [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Manna De"},
    {id: 41, name: "Moyuri"},
    {id: 71, name: "Dipjol"}
];

// console.log("HERE : ", student[1].name);


const names = student.map(std => std.name);
console.log(names);


const ids = student.map(std => std.id);
console.log(ids);


const bigger = student.filter(std => std.id > 40);
console.log(bigger);


const biggerOne = student.find(std => std.id > 40);
console.log(biggerOne);


// const nameArray = [];
// for (let i = 0; student.length; i++) {
//     let element = student[i].name;
//     console.log("HERE : ", element);
//     let value = element;
//     nameArray.push(value); 
// }
// console.log(nameArray);
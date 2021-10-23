// function greet(): string {
//     return 'Hello..JS!'
// }
// console.log(greet());

// let greet = function () {
//     return 'Hello..Js!!'
// }
// console.log(greet());

let greet = ()=> `Hello..Js!!!`;
console.log(greet());

let fullName = (fname:string, lname: string)=> `${fname}.${lname}`;
console.log(fullName('shravan', 'madipelly'));

// let sum = (a,b,c) => `${a + b + c}`
let sum = (a: number,b: number,c: number)=> a + b + c;
let result = sum(10,20,30);
console.log("Sum is:", result);





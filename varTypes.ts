// declarations must be initialized.
// const value:number; 
const value:number = 40;
// Cannot re-assign to 'value' because it is a constant
// value = 100;
// let is block level-scope
let letVal:number;
letVal = 10;
letVal = 400; 
console.log("Defalut Value of let variable is:", letVal);
// var=>Funtional scope
var varVal: number;
console.log("Defalut Value of var variable is:", varVal);

let studentInfo:[number,boolean,string]=[100,true,"shravan"];
console.log("Info=>",studentInfo);
studentInfo.push("Hello");
console.log("Info=>",studentInfo);
studentInfo.pop();
console.log("Info=>",studentInfo);
studentInfo.shift();
console.log("Info=>",studentInfo);
studentInfo.unshift(200)
console.log("Info=>",studentInfo);



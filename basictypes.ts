// primitive types=> string,boolean,number
// complex types=> Arrays,Objects
// funtion types=> funtion return types and parameters.
// let, const and var =>local scope ,global scope, funtional scope, block level scope.
// Infernce Type
// tsc & node => compile and  run ts file
// importance of "type"
// Union types(multitypes)
// template literals
// rest Operators
// type operator
// hositing

let firstName = "sharvan"; // Infernce Type 
console.log(firstName);

let age:number;
let lastName:string;
lastName ="Madipelly";
lastName = "M";
let isValue: boolean;
// const myName:string; //const must be initalized
const myName = "Shravan";
// myName = "Raj"; // const re-assignment not possible

let u: undefined = undefined;
let n: null = null;
console.log(`Obesrve: ${u} and ${n}`); // literal's


let fruits: string[]=["Apple","Banana","Orange"];
let veggies: Array<string>=["carrot","tommoto","onions"];

type Person = {fname: string;lanme: string;age: number; exp: number}

let person: Person ={
    fname: "shravan",
    lanme: 'madipelly',
    age: 30,
    exp: 4
}

// person = "hello"; re-assign not possible
person.exp = 10;
console.log(person.age);
console.log(typeof person);

let person1: Person ={
    fname: "Raj",
    lanme: 'madipelly',
    age: 34,
    exp: 8
}
console.log(person1);


//block level scope vs funtional scope

function display(cond:boolean) {
    if(cond){
        let age: number = 40;
        return age;
    }else{
        // return age; 
        return null;    
    }   
}

const result = display(false);
console.log(`age is: ${result} `);

const[first, ...restOpt] = [10,20,30,40];
console.log(first);
console.log(restOpt);

// hositing 
// console.log(y);
console.log(x);
// let x: number= 20;
var x = 10;
console.log(x);

let welcomeMsg: string|boolean; // union or multi type
welcomeMsg = "Hello World!";
console.log(`${welcomeMsg}`);
welcomeMsg = false;
console.log(`${welcomeMsg}`);

let anyTypeValue;
anyTypeValue = "Shravan";
anyTypeValue = false;
console.log(`any<TYPE> fallback TS funtionality: ${anyTypeValue}`);
console.log(typeof anyTypeValue);












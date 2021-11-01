// let fullName = (firstName="M", lastName?:string)=> `${firstName} ${lastName}`; 
//     // optional parameters
//     //default params 


//     console.log(fullName());
//    // console.log(fullName("shravan"));
//   // console.log(fullName('shravan','madipelly'));

let colors = ['blue','yellow','red','green'];
let [firstColor,secondColor, ,...restColors] = colors;
console.log(`First Color is: ${firstColor} and Rest of the Colors are: ${restColors}`);
console.log(`Second Color is: ${secondColor}`);

let [evenNumber,...restEvenNumber] = [2,4,6,8,10,12,14];
// rest operators
console.log(evenNumber);
console.log(restEvenNumber);

function sum(firstNumber: number, ...restNumbers:number[]) {
    // rest Operators
    console.log(restNumbers);
    console.log(firstNumber);  
}
let listNums: number[] = [10,20,30,40,50]
sum(1,...listNums);// spread operator






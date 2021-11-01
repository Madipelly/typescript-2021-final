function display(cond: boolean) {
   if(cond){
      // var value = "shravan"; // find the value but it's undefined.
       let value = "madipelly";
       return value;
   } 
   else{
       // return value; // let local-scope, cannot find the value.
       return null;
   }
}
// console.log(display(false));

// for (let i = 10 ; i > 0 ; i--) {
//    console.log(`Print iterate values: ${i}`);   
// }

const user ={
    name: 'Shravan',
    age: 28
}

user.age = 18;
console.log(user);

// user = {
//     exp: 10
// }









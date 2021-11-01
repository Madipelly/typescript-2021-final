// Default and optional params.
function fullName(fname="shravan",lname?:string) {
   if(lname){
       return `Your's full name is: ${fname} ${lname}`
   } 
   else{
       return `User First Name is: ${fname}`
   }
}
let res = fullName();
console.log("Display Defalut Name is: ", res);
let res1= fullName('Kanishk');
console.log("Display First Name is: ", res1);
let res2 = fullName('Kanishk','Madipelly');
console.log("Display Name is: ", res2);
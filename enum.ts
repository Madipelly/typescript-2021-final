enum ErrorCodes{
   INVALID_USER = 1001,
   INVALID_ACCOUNT = 1002,
   INVALID_PASSWORD,
   DEACTIVATE_ACCOUNT

}
console.log(typeof ErrorCodes);
console.log(typeof ErrorCodes.INVALID_USER);
console.log(typeof ErrorCodes.DEACTIVATE_ACCOUNT);
console.log(`User Enter Invalid Password Code is: ${ErrorCodes.INVALID_PASSWORD}`);
console.log(`User Deactivate Account Code is: ${ErrorCodes. DEACTIVATE_ACCOUNT}`);



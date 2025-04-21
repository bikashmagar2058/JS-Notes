console.log(2>1);
console.log(2==2);
// these are the simple comparision 
//these gives the boolean value true/false.

// these are more confusion
console.log("2">1);
console.log("02"==2);
//in this types of operation the string value will be converted into string and compare
//this may create the confusion when there is two different data types.

//when comparing with null 
console.log(null>0);
console.log(0<null);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);
//first three gives the false value and last two gives true values
// donot write this types of confusing code 

//there is also the problem while comparing  with the "undefined" value
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
// all of these gives the "false" value.

//NOTE: don't write these types of confusion code while implementing in your projects.








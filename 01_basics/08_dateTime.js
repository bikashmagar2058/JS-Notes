// Dates
console.log(Date());// this gives the date and time of the execution of this code.

//data types of dates is object
let myDate = new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2002, 8, 26);
console.log(`My date of birth is ${myCreatedDate.toLocaleDateString()}`);

// time spamp

let myTime = Date.now();
console.log(myTime);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getTime()/1000);
console.log(Math.floor(myCreatedDate.getTime()/1000));
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getMonth());






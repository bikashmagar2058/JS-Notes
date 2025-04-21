let score = 100;
console.log(score);

let balance = new Number(400);
console.log(balance);

let newNumber = 123.464;
console.log(newNumber.toString().length);// change the value into string and give the length of string
console.log(newNumber.toFixed(1));// this help to find(set) the fixed value after decimal

let otherNumber = 12.6868;
console.log(otherNumber.toPrecision(3));// this helps to find the precision value of the given fixed 
//number of digits

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'));

// ***********math**************8

console.log(Math);
console.log(Math.abs(-354));
console.log(Math.round(23.321));
console.log(Math.ceil(4.2));
console.log(Math.floor(2.96));
console.log(Math.min(2,4,5,1,6));
console.log(Math.max(2,4,5,1,6));

// random 
//  it helps to find the random values.
console.log(Math.random());// innitially it gives the random values between the 0 and 1

// you can find the random values between any ranges
console.log(Math.random()*10+1);// this gives the value greater than one

// to find the random value between two mumber: let say:- min and max
// Math.random()*(max-min+1)+min
let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
//here floor is used to remove the decimal points and choose the minimum value






let score = 10;
console.log(typeof(score)); // typeof provide the type of the datatype for the given data

let rollNo = "20";
console.log(typeof(rollNo));

let valueInNumber = Number(rollNo);  // this change the string value in number
console.log(typeof(valueInNumber));

let myName = 2000;
let valueInString = String(myName);
console.log(typeof(valueInString));
console.log(myName);
console.log(valueInString);
console.log(myName+2000);   // Here the number will be added:4000
console.log(valueInString+2000); // Here the number will be treated as a string:20002000

let input = "100abc";
let convertOutput = Number(input);
console.log(convertOutput); // this gives the 'NaN' output because '100abc' is not a number

let x = 1;
let valueInBoolean = Boolean(x);
console.log(valueInBoolean); 
// 1 => true
// 0 => false
// undefined => false

// ************operations*************//

console.log(1+2); // simple addition:3
console.log("1"+2);// string addition:12
console.log(1+"2");// string addition:12
console.log("1"+2+3);// output :123// string addition
console.log(1+2+"3");//output: 33 // first two will be added and 3 performs string addition
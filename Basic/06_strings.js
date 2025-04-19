let name = "bikash";
let age = 23;

console.log(`my name is ${name} and my age is ${age}`);
// this is the method of the string interpolation.

const fullName = new String('bikashthapa');

console.log("the first leter of my name is " + fullName[0]);
// this will print the first letter of the name
console.log(`the first leter of my name is ${fullName[0]}`);
// these are the methods of concatination of the words to print the output

//to find the length of the string
console.log(fullName.length);

// to find the prototype of the string
console.log(fullName.__proto__);

//there are several methods to manipulate the strings
console.log(fullName.toUpperCase()); // change the string into uppercase letter
console.log(fullName.charAt(2)); // gives the character at index 2
console.log(fullName.indexOf('t'));// gives the index number of the 't'

const newString = fullName.substring(6,0);
console.log(newString);
/*
substring example:
let str = "JavaScript";

str.substring(0, 4);  // "Java"
str.substring(4);     // "Script"
str.substring(4, 0);  // "Java" (same as substring(0, 4))

*/

const anotherString = fullName.slice(6,0);
console.log(anotherString);
/*
slice example:
let str = "JavaScript";

str.slice(0, 4);     // "Java"
str.slice(4);        // "Script"
str.slice(-6);       // "Script"
str.slice(4, 0);     // "" (empty string)
*/

// ****trim******
// trim helps to remove the unwanted spaces in the string.
let oneString = "     ram   "
console.log(oneString);
console.log(oneString.trim());

// ****replace***
// it helps to replace the string
//syntax: str.replace("value to be replace", "the value that will be place");
let url = "https://bikashthapa.com/js%20notes"; // here "%20 should be replaced"
let newUrl = url.replace("%20","-"); // https://bikashthapa.com/js-notes
console.log(newUrl);

//*****include*****
//include checks whether the value is include or not: it gives true/false as output.
let checkString = url.includes("bikash");
console.log(checkString);

// ****split****
let sentence = "my name is bikash thapa magar";
let splitString = sentence.split(" "); // this split the sentence on the basis of the space given
//provide the result in the form of array
console.log(splitString);



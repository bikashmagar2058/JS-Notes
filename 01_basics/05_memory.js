// we have two types of data types

// premitive data types: Number, String, boolean, null, undefied, symbol, bigInteger;

// Reference data types: array, objects:

// ***********memory  in javascript*************
// two types of memory: stack and heap
// stack (for premitive datatypes)
// stack duplicate the value 

// heap (for reference datatypes)
// heap actuall get the reference directly from the original memory 

// here is the example to clearify clearly:

let myemail = "bikash@gmail.com";
let youremail = myemail;

youremail = "bibek@gmail.com";
 
console.log(myemail);
console.log(youremail);
// here the output will be different because the input will not replace the value in the main memory 
//location instead it will create the another duplicate(create the seperate memory) memory.

// now the example for the heap

let empone = {
    email : "bikash@gmail.com",
    age : 20
};

let emptwo = empone;
emptwo.email = "bibek@gmail.com";
console.log(empone); 
console.log(emptwo);
// here the result of both the output is same because it will change from the main memory.





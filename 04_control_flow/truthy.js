const userEmail = "bikash@gmail.com";

if(userEmail){
    console.log("got your email address.");
    
}
else{
    console.log("you don't have assign the email address.");
    
}

// falsy value:
// false, 0, -0, null, undefined, BigInt 0n, NaN, ""

// truthy value:
// "0", " ", "false",[], {}, function(){}

// to check whether the empty array is a truthy value :

const usersArr = [];
if(usersArr.length ===0){
    console.log("the given array is empty.");
}
// check the empty object:

const emptyObject = {};
if(Object.keys(emptyObject).length===0){
    console.log("the object is empty.");
    
}

// nullish coalescing operator (??): null undefined 

//val1 = 5 ?? 10;//  here the value will be 5
// val1 = null ?? 10;// here the value will be 10
// val1 = undefined ?? 10;// here again the value will be 10 
val1 = null ?? 10 ?? 20 ;// again the value will be 10


console.log(val1);

// ternary operators
// condition ?? true: false

const milkCoffeePrice = 100;

milkCoffeePrice <=80 ? console.log("milk tea price is less than 80") : console.log("milk tea price is more than 80");

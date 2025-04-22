// example of function
/*
let a = 5;
let b =10;

const calculate = function(){
    let sum = a+b;
    console.log(`the sum of numbers ${sum}`);
    //console.log(sum);
    
}
console.log(calculate());

multiply = function(x,y){
    let product = x * y;
    console.log(`the product of numbers is ${product}`);
    
}
console.log(multiply(2,3));


// the simple way to declare teh function:

function myName(){
    console.log("bikash thapa")
}

// the simple way to execute this function is 
myName();

function calculateSum(number1, number2){
    return number1+number2;
}
//calculateSum(1,2);
console.log(`the sum of the given numbers is ${calculateSum(1,2)}`);


function userLoggedin(username){// we can also set the default value 
    if(username===undefined)//if(!undefined)
        { 
        console.log("please enter the username");
        return
        }
    return `${username} just logged in`;
}
console.log(userLoggedin());//if we pass the parameter it will override the default value.
*/

//**********array and objects */

function calculateprice(...item){//... is the rest of spread operator.
    return item;
}
console.log(calculateprice(100,200,3000));

// object access by function:
const user = { 
    name : "bikash", 
    price : 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({ // you also can directly assign the value for the objects.
    name : "sam",
    price : 1000
})

// way to access the array 

const myNewArray = [100,200,300,400,500];
function getValueFromArray(getArray){
    return getArray[0];
}
console.log(getValueFromArray(myNewArray));
console.log(`the extracted value from array is ${getValueFromArray(myNewArray)}`);


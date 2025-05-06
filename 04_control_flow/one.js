 // if condition is also the control flow statement 


if (3 != 2){
    console.log("exicuted");
    
}

// there are a lot of condition 
// <,>,<=,>=, ===, 

const emailLOggedIn = true;
if (emailLOggedIn){
    console.log("you are logged in.");
    
}

// another example of multiple condition:

const number= 1000;
if (number < 500){
    console.log(`the given number is less than 500`);
}
else if(number<800){
    console.log(`the given number is less than 800`);
    
}
else if(number===1000){
    console.log(`the number is 1000`);
    
}
else {
    console.log(`the number is invalid.`);
    
}
// we can use the multiple condition
// and && operation in the condition

const userName = "bikash";
const password = 1234;
if (userName == "bikash" && password == 1234){
    console.log("you can logged in.");
    
}
else{
    console.log("enter valid userName and password.");
    
}
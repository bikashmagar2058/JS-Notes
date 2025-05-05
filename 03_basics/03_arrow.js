const user = {
    userName : "bikash",
    age : 20,
    welcomeMessage : function(){
        //console.log(`${this.userName} , welcome to our website.`);
        //console.log(this);
    }
}
user.welcomeMessage();

// function chai(){
//     console.log(this);
// }
// chai();
/*
const chai = function(){
    let userName = "bikash"
    console.log(this.userName);
}
chai();
*/

const chai = ()=>{
    let userName = "bikash"
    console.log(this.userName);
}
chai();// both are the same 

//basic arrowo funtion:
const sum = (num1,num2)=> {
    return num1 + num2// this is the explicit function because there is the use of return keyword.
}
console.log(sum(2,3));

// we can do the implicit function in the arrow function:
const add = ( num1, num2)=> num1+num2;
// also you can write as follow
// const add = ( num1,num2)=> (num1+num2)
console.log(add(4,5));





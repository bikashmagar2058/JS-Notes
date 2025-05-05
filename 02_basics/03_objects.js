// objects in javascript
// singelton
// Object.create

// object literals:
const mySym = Symbol("key1");

const jsUser = {
    name: "bikash",
    "fullName": "bikash thapa",
    "age": 24,
    [mySym]: "myKey1",
    location: "pokhara",
    email: "bikash@gmail.com",
    dayLogedIn: ["sunday","monday"]
}

console.log(jsUser.name);//this gives the answer but it is not the proper way
console.log(jsUser["email"]);// this is the best way 
console.log(jsUser.fullName);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email="emailchange@gmail.com";
console.log(jsUser.email);
//Object.freeze(jsUser);//this fix the js objects it dosenot allow the further change in the object
// icomment this method because it hamper the further other process in the file
jsUser.greeting = function(){
    console.log("hello js user ");
};
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
};
console.log(jsUser.greetingTwo());






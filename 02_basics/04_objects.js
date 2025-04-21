// this is the part two of the js objects.
// let tinderUser = new Object(); // this is the singelton object.
/*
let tinderUser = {};// this is the way to declare the non singelton object.

tinderUser.name = "bikash";
tinderUser.email = "bikash@gmail.com";
tinderUser.age = 24;

console.log(tinderUser);

// we can create the object inside the object 
const userDetails = {
    email : "example@gmail.com",
    fullName: {
        userFullName: {
            firstName: "bikash",
            lastName: "thapa"
        }
    }
}
console.log(userDetails);
console.log(userDetails.fullName);
// to dissplay only first name:
console.log(userDetails.fullName.userFullName.firstName);
*/

// to combine the two different objects
let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"c", 4:"d"};

// let obj3 = {obj1, obj2}
let obj3 = Object.assign({}, obj1, obj2);// this is the way to combine two object correctly
//console.log(obj3);

let obj4 = {...obj1, ...obj2};
console.log(obj4);







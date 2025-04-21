// this is the part two of the js objects.
// let tinderUser = new Object(); // this is the singelton object.

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


// to combine the two different objects
let obj1 = {1:"a", 2:"b"};
let obj2 = {3:"c", 4:"d"};

// let obj3 = {obj1, obj2}
let obj3 = Object.assign({}, obj1, obj2);// this is the way to combine two object correctly
//console.log(obj3);

let obj4 = {...obj1, ...obj2};// this is the spread method 
console.log(obj4);

console.log(Object.keys(tinderUser));// this is used to find the keys of the objects 
console.log(Object.values(tinderUser));// this is uded to find the values of the object
console.log(Object.entries(tinderUser)); // this gives both the keys and values of the object.
console.log(Object.hasOwnProperty("bikash"));//checks for the keys if it exist or not.



// **************object de-structuring ******************
const course = {
    courseName : "js full course",
    price : "999",
    courseInstructor : "hitesh chaudary"
};

const {courseInstructor : instructor} = course;// we can de-structure to the simple word
console.log(instructor);


//json:javascript object notation 
// json is written in the following format:
/**
 {
    "courseName": "javascript",
    "price": "free",
    "courseInstructor": "hitesh"
 }
 */












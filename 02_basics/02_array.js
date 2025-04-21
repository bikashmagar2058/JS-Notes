const remoteMember = ["shikhar", "sudip", "khatri"];
const officeMember = ["bikash", "samip","tiwari","dhane","prashanna"];

remoteMember.push(officeMember);
console.log(remoteMember);
// this method is not suitable because the member of the office act as the one element while combining

// concatination method 
const allMember = remoteMember.concat(officeMember);
console.log(allMember);
// this method also to much suitable if there are more than two array to be combine 

//spread method 
const asthabhujMember = [...remoteMember,...officeMember];
console.log(asthabhujMember);

//flat(infinity)
let anotherArr = [1,2,3,[1,2],[3,4,5,6]];
let newAnotherArr = anotherArr.flat(Infinity);// this split all the sub array and provide a single array
console.log(newAnotherArr);

console.log(Array.isArray("bikash"));// this check if the given input is array or not 
// this gives the boolean value: true/false

console.log(Array.from("bikash"));// this conver the given input into array:

console.log(Array.from({name:"bikash"}));// this gives the empty value 
// it cannot be convert into the array as previous one 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));// we can make the array in this vay using the variables.



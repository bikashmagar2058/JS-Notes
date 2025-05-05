// Array

let myArr = [0,1,2,3,4,5];
console.log(myArr[0]);

const members = new Array("bikash", "dhane", "tiwari","khatri");
console.log(members[2]);
console.log(`this is the array before pushing all members: ${members}`);

// methods in array
members.push("samip","sudip","shikhar","prashanna");
console.log(members);

//pop() method is used to remove the value from the array
myArr.pop(5);
console.log(myArr);

myArr.unshift(9); // this add the value int the 0 index of the array
console.log(myArr);

myArr.shift(); // this remove the value from teh 0 index of the array
console.log(myArr);

const newArr = myArr.join(); // join() convert the array into string and join them together.
console.log(newArr);
console.log(typeof newArr);// string

// includes
console.log(myArr.includes(9));//it checks whether the 9 is include or not in the array
console.log(myArr.indexOf(4));// it find the index of the specific element of the array

// slice and splice
console.log("A ", myArr );
console.log(myArr.slice(1,4));// 1 is the starting index and 3 is ending index
//slice dosenot include the element of teh ending index. as in eg. the value of 1 and 2 index will display

console.log("B ", myArr);
console.log(myArr.splice(1,3));// the output contain the element of both start and end index.
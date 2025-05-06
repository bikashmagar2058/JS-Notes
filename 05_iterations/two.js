// // while loop example

// let i = 1;
// while (i<=10){
//     console.log(i);
//     i=i+2;
       
// }
// // example for array
// let myArray = ["dhane", "tiwari", "prashanna", "bikash"]

// let arr = 0;
// while(arr< myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1;
// }

// do while loop
// execution will be applied in do block and condition will be applied in while block;

let num = 1;
do{
    console.log(`the number is ${num}`);
    if(num==5){
        console.log(`the number 5 is detected`);
    }
    num++;
}
while(num<=10);

// immidate invoke function expressions:
// this iife concept is used  to exectute the proram immidately 
// for example the database connection it should be connected immidately after the start of the program
// we can apply it by creating the scope by the help of the small bracket 
// some time due to the globle scope there will be the pollution in the code so inorder to prevent it 
// we use the iife.
// example

(function chai(){
    console.log(`DB conntected`)
})();//here you must have to end the iife scope after the completion if we don't end it will not exectute 
// the further other line.

// you also can write in the arrow function:
(
    ()=>{console.log(`db connected two`);}
)();//remember to end the iife scope!

( (name)=> {
    console.log(`your name is ${name}`);
})("bikash thapa");
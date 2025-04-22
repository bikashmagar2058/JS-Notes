//global scope and block scope :
// in global scope the variable is accessible all over the program
// block scope is available with in a block {}

//let a =100;
//const b = 200;
//var c = 300;// these are the global scope variable:

if(true){
    let a= 1;
    const b =2;
    var c = 3;
}
//console.log(a);
//console.log(b);
console.log(c);// here the value of the block scope is still accessed while using the var 
// this may create the problem in the whole program if we declare the variable of same name in global scope


function one(){
    let name ="bikash";
    let result = function two(){//function two()
        let surname = "thapa ";
        console.log(name);
    }
    //console.log(surname);//it cannot be access from outside the block 
    console.log(result());//two()  
}
one();

//+++++++++++++interesting+++++++++++++++++

function addOne(num){
    return num + 1;
    console.log(num);
    
}

console.log(addOne(5));


const addTwo= function(num){
    return num + 2;
    console.log(num);

}
console.log(addTwo(5));
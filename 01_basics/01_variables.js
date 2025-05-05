const costumerId = 10000;
let costumerEmail = "bikas@gmail.com";
var costumerName = "Bikash";
//donot use the "var" because it dosenot have the block scope and functional scope
let costumerCity = "bijaypur";
//you can crite the variable without declaring but donot do that 
console.log(costumerName);

console.log(costumerCity);
// costumerId=2000;//const cannot be change
costumerName="bibek";
costumerCity="pokhara";
//you can display the output in a tabular form as given below
console.table([costumerId, costumerEmail, costumerName, costumerCity]);

//giving semicolumn ";" is not required in javascript also you can write

// for of loop
let arr = [1,2,3,4,5,6]
for (const element of arr) {
   // console.log(element);
       
}
// this is the easy way to use the forof loop

// we can also use it for the strings
let name = "bikash thapa";
for (const letter of name) {
    //console.log(letter);
    
}

//maps

const map = new Map();
map.set("NP","NEPAL");
map.set("USA","UNITED STATES OF AMERICA");
map.set("Fr", "FRANCE");
//console.log(map);
for (const [key,value] of map) {
    console.log(key,":-",value);   
}
// for loop
/*
let array = ["madan","prashanna","shikhar","bikash"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == "prashanna"){
        //console.log("prashanna is a designer.")
    }
    //console.log(element);
}
//console.log(`the length of the array is ${array.length}`);

for(i=0; i<=10; i++){
    console.log(`this is the table of :${i}`)
    for(j=0; j<=10; j++){
        console.log(i + "*" + j + "=" + i*j);
    } 
}// this gives the multiply table from 0 to 10
*/
// to stpo the execution at the required point we use the break 

for (i=1; i<=10; i++){
    if(i==5){
        console.log("the number 5 is dected.")
        break;
    }
    console.log(`the number is ${i}`);
}
// continue is used to continue the loop 

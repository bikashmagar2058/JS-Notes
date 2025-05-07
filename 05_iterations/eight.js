// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc:- ${acc} and currval:- ${currval}`);
    
//     return acc + currval;
// },0);
// writing the same function using arrow function:
const myTotal = myNums.reduce( (acc,currval)=> (acc + currval));
console.log(myTotal);

// suppose you are going for the shopping and you have to add price of all item 
const shoppingCart = [
    {
        itemName : "shose",
        price : 5000
    },
    {
        itemName : "T-shirt",
        price : 2000
    },
    {
        itemName : "pant",
        price : 3000
    },
    {
        itemName : "cap",
        price : 1500
    }
]
const Total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(Total);

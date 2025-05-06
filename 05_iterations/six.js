// filter operations

// const myNums = [1,2,3,4,5,6,7,9]

// const newNums = myNums.filter((num) => num >5);
// console.log(newNums);


const book = [
    {
        title: 'book one', genre: 'history', published: 2002, edition: 2020
    },
    {
        title: 'book two', genre: 'non-friction', published: 2001, edition: 2019
    },
    {
        title: 'book three', genre: 'friction', published: 2002, edition: 2018
    },
    {
        title: 'book four', genre: 'science', published: 2003, edition: 2021
    },
    {
        title: 'book five', genre: 'history', published: 2008, edition: 2022
    },
]

let newBookList = book.filter((bk)=> bk.genre === "history");
newBookList = book.filter((bk)=> bk.edition >= 2020);
console.log(newBookList);

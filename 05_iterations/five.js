// high order array

//const coding = ["c++","python","java", "react"];

// coding.forEach(function (val){
//     console.log(val);
    
// });

// arrow function

// coding.forEach((val) => {
//     console.log(val);
// })

// array of the objects

const myCoding = [
    {
        languageName: 'java',
        fileExtension: 'java'
    },
    {
        languageName: 'javascript',
        fileExtension: 'js'
    },
    {
        languageName: 'python',
        fileExtension: 'py'
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
}
)
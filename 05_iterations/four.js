// for loops for the objects
// forin is used

let myObject = {
    'js': 'java script',
    'rb': 'ruby',
    'cpp': 'c programming'
}

for (const key in myObject) {
    console.log(`${key}:- ${myObject[key]}`)
}
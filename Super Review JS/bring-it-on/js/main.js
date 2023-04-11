// *Variables*
// Create a variable and console log the value
let ranVar = 21
console.log(ranVar)

// Create a variable, add 10 to it, and alert the value
let addVar = 12
addVar += 10
alert(addVar)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractor(a,b,c,d) {
    alert(a - b - c - d)
}
subtractor(10,5,3,1)

// Create a function that divides one number by another and returns the remainder
function divRemainder(a,b) {
    return a % b
}
console.log(divRemainder(10,4))


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b) {
    if (a + b > 50) {
        alert(`JUMAAAAANJIIIII`)
    }
}
jumanji(11,40)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a,b,c) {
    if ((a * b * c) % 3 === 0) {
        alert(`ZEBRA`)
    }
}
zebra(11,3,2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function xTimes(word,num) {
    for (let i = 0; i < num; i++) {
        console.log(word)
    }
}
xTimes(`hi`,4)
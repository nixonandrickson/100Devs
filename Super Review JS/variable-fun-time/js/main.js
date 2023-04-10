//--- Easy
//create a variable and assign it a number
let number = 25

//minus 10 from that number
number -= 10

//print that number to the console
console.log(number)


//--- Medium
//create a variable that holds a value from the input
let input = Number(document.querySelector('input').value)

//add 25 to that number
input += 25

//alert that number
console.log(input)


//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addEmUp)

function addEmUp() {
    let varSum = number + input
    console.log(varSum)
}
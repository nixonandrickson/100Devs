//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(n1,n2) {
    alert(n1 - n2)
}
subtract(10,5)

//create a function that divides three numbers and console logs the quotient
function divide(n1,n2,n3) {
    console.log(n1 / n2 / n3)
}
divide(100,25,2)

//create a function that multiplys three numbers and returns the product
function multiply(n1,n2,n3) {
    return (n1 * n2 * n3)
}
console.log(multiply(2,4,6))


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function sumAndDivide(n1,n2,n3) {
    return ((n1 + n2) % n3)
}
console.log(sumAndDivide(10,5,6))


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNums(n1,n2,n3,n4) {
    if (n1 * n2 > 100){
        console.log(n3 + n4)
    }else if (n1 * n2 < 100){
        console.log(n3 - n4)
    }else{
        console.log((n1 * n2 * n3) % n4)
    }
}
fourNums(11,10,5,7)
fourNums(9,10,5,8)
fourNums(20,5,3,29)
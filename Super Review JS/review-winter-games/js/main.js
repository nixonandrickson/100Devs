//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function onlyEvensArr(arr) {
    let onlyEvens = []

    arr.forEach((e) => {
        if (e % 2 === 0) {
            onlyEvens.push(e)
        }
    })
    
    return onlyEvens


    // return arr.filter(x => x % 2 === 0) // One line of code is using filter method
}
console.log(onlyEvensArr([1,2,4,6,8]))
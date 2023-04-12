//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = `black`
stopwatch.shape = `round`
stopwatch.brand = `Nike`
stopwatch.condition = `New`

stopwatch.start = function() {
    console.log(`Run`)
}
stopwatch.stop = function() {
    console.log(`Stop Running`)
}
stopwatch.morph = function() {
    console.log(`It's Morphin Time`)
}
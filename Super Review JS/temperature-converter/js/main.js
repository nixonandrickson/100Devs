//Write your pseduo code first! 

//    -----My pseudo code-----
// To convert Celsius to Fahrenheit you need to get the value of C first
// Use formula to find the F equivalent
// Show F value


document.querySelector('button').addEventListener('click', cToF)
function cToF() {
// To convert Celsius to Fahrenheit you need to get the value of C first
    let c = document.querySelector('input').value
// Use formula to find the F equivalent
    let f = c * (9/5) + 32
// Show F value
    document.querySelector('h2').innerText = f
}
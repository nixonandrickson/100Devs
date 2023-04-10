//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
// if (age < 16){
//     console.log(`You cannot drive`)
// }else if (age < 18){
//     console.log(`You can't hate from outside the club. You can't even get in`)
// }else if (age < 21){
//     console.log(`You cannot drink`)
// }else if (age < 25){
//     console.log(`You canno rent cars affordably`)
// }else if (age < 30){
//     console.log(`You canno rent fancy cars affordably`)
// }else {
//     console.log(`There's nothing left to look forward to`)
// }

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1').addEventListener('click', checkAge)
function checkAge() {
    let p = document.querySelector('p')
    let age = document.querySelector('input').value
    
    if (age < 16){
        p.innerText = `You cannot drive`
    }else if (age < 18){
        p.innerText = `You can't hate from outside the club. You can't even get in`
    }else if (age < 21){
        p.innerText = `You cannot drink`
    }else if (age < 25){
        p.innerText = `You cannot rent cars affordably`
    }else if (age < 30){
        p.innerText = `You cannot rent fancy cars affordably`
    }else {
        p.innerText = `There's nothing left to look forward to`
    }
}
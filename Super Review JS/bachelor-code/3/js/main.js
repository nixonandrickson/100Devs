// const contestants = document.querySelectorAll(/*INSERTCODE*/)

// Array.from(contestants).forEach(element => element.addEventListener('click', /*INSERTCODE*/))

// function checkForRose(click){
// 	if(click.target.classList.contains(/*INSERTCODE*/)){
// 		document.querySelector('#nikki').classList.toggle(/*INSERTCODE*/)
// 	}else{
// 		alert("Wrong!");
// 	}
// }


// .querySelectorAll() will return a "node list" of everything that has a class of contestant
const contestants = document.querySelectorAll(`.contestant`)

// Using the node list we got above we can use Array.from() to make it behave like an array so that we can use .forEach
// This allows us to set up event listeners on each class of contestant instead of having to set up multiple event listeners
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	// Checks if the click that had a class of contestant also has a class of rose
	if(click.target.classList.contains(`rose`)){
		document.querySelector('#nikki').classList.toggle(`hidden`)
	}else{
		alert("Wrong!");
	}
}
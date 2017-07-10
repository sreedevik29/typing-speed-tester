var testWrapper = document.querySelector(".test-wrapper");
var testArea = document.querySelector("#test-area");
var originText = document.querySelector("#origin-text p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
function spellCheck() {
	var textEntered = testArea.value;
	console.log(textEntered);
}

// Start the timer:
function start() {
	var textEnteredLength = testArea.value.length;
	console.log(textEnteredLength);
}

// Reset everything:
function reset() {
	console.log("reset button has been pressed!");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
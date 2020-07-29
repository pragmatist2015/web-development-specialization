// simple fuction that call the alert method to display a generic message
function genericMsg() {
	alert("Hello World from an external js file");
}

genericMsg();

// writting directly to the page with document.write function
document.write("writting directly to the page");

// Responding to Events
// this function is used to print out a unique message for each Event handled to the p tag with id output

function msg(message) {

	document.getElementById('output').innerHTML = message + " event";
}

// track number of events
var resizeCt = 0;
var clickCt = 0;
var loadCt = 0;

// function to count number of unique events
function eventCt( m ) {
	if ( m === "LOAD" )
		document.getElementById('output').innerHTML = ++loadCt + " " + m + " event occurred";
	if ( m === "RESIZE" )
		document.getElementById('output').innerHTML = ++resizeCt + " " + m + " event occurred";
	if ( m === "CLICK" )
		document.getElementById('output').innerHTML = ++clickCt + " " + m + " event occurred";
}

// button click and display current date
function displayDate() {
	document.getElementById('demo').innerHTML = Date();
}
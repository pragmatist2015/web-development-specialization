function init(){
	// get referenced to p element with id = output
var pID_output = document.getElementById("output");
document.getElementById('output').innerHTML = "wtf";
// get reference to table date cell arry
var tdArr = document.getElementsByTagName('td');

var add = function (a, b) {
  return a - b;
};
var add2 = add.bind(null, 3);

var i;
for(i=0;i<tdArr.length;i++){
  tdArr[i].addEventListener("click", newCalenderEvent.bind(null, tdArr[i]));
}
}



//pID_output.innerHTML = add2(2,2);

//pID_output.innerHTML = tdArr[5].innerHTML;

//tdArr[5].addEventListener("click", newEvent );

function newEvent(td) {
  var msg = prompt("Add new Calender event");
  tdArr[6].innerHTML  = tdArr[6].innerHTML + "<span class = 'newSpan'>" + msg + "</span>";
}

// add event listener to every cell


function newCalenderEvent( td ) {
  //pID_output.innerHTML = td.cellIndex;
      var msg = prompt("Add new Calender event");
  td.innerHTML  = td.innerHTML + "<span class = 'newSpan'>" + msg + "</span>";
}
/*var newCalenderEvent = function(td) {
    return function curried_func(e) {
        // do something here
      pID_output.innerHTML = td.cellIndex;
      var msg = prompt("Add new Calender event");
  td.innerHTML  = td.innerHTML + "<span class = 'newSpan'>" + msg + "</span>";
    }
}*/

function msgToConsole(){
  console.log("message to console");
}


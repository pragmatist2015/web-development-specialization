var numOfClicks = 0;


function message(msg){
  if(msg ==  "ONCLICK"){
    numOfClicks++;
  }
  if(numOfClicks > 0){
    document.getElementById('output').innerHTML = msg + " event"
      + "<br>" + numOfClicks + " user clicks";
      return;
  }
  document.getElementById('output').innerHTML = msg + " event";
}

function displayDate(){
  document.getElementById('btnEvent').innerHTML = Date();
}


function hide(){
  //get reference to element
  x = document.getElementById('demo1');

  // Option1 using the API to change the element style directly
  //x.style.display = "none";

  //Option2 using the API to change the element style using class(s) define in the CSS
  x.className = "hide";
}

function show(){
  //get reference to element
  x = document.getElementById('demo1');

  // Option1 using the API to change the element style directly
  //x.style.display = "block";

  //Option2 using the API to change the element style using class(s) define in the CSS
  x.className = "show";
}

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

// generic array declaration
var arrOfFruit = ["Banana","Orange","Mango","Pineapple"];

// get values from html after pages has loaded to avoid null references
function onLoad(){

}

//output array elements
function demo2(){
  document.getElementById('demo2').innerHTML = arrOfFruit;
}

// prompt to add to list of fruits
function demo5(){
  input = prompt("What is a fruit you enjoy?");
  if(input != null && input != ""){
    arrOfFruit.push(input);
  }
}

// display elements of an array in an unordered list
function demo3(){
  // get reference to ul tag
  var ulList = document.getElementById('demo3');

  //get ulList list items
  var liList = ulList.getElementsByTagName('li');

  for(counter = 0;liList.length > counter; counter++ ){
    liList[counter].innerHTML = arrOfFruit[counter];
  }// end for
}

// pull content from html unordered list and output results
function demo4(){

    // get innerHTML of list items
    var ulList = document.getElementById('demo4');
    var liList = ulList.getElementsByTagName('li');

    var arr= [""];
    for(counter = 0; liList.length > counter; counter ++) {
      arr.push(liList[counter].innerHTML);
    }
    document.getElementById('demo6').innerHTML = arr;
}

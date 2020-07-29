// if more detials window is displayed
var windowOnScreen = false;
// array of image objects
var arrOfImageObj = [];
// array of elements ( in this case type div) to return`
var arrayOfDivs = [];
var container;
var links = [
  "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60",
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM2OTY0fQ&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1467139840664-96b244a66825?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1560963619-c9e49c9380bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1496483353456-90997957cf99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1501457191481-671f811805de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1560806108-41a68051b9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
];

var titleAltText = ["blue lemon sliced into two halves",
  "airplane on ground surronded with trees",
  "minifigure head lot",
  "person holding light bulb",
  "multicolored hallway",
  "white ceramic mug on table",
  "person submerged on body of water holding sparkler",
  "pink flamingo swim on body water in summer",
  "pink sofa chair near body of water",
  "aerial view photography of group of people walking on gray white pedestrain lane",
  "pink ballon tied on white wooden chair",
  "This is the sign you've been looking for neon signage",
  "gray concrete bricks painted in blue",
  "selective photo of kid holding candies on gray wooden pallet board",
  "black Fayorit typewriter with printer paper",
  "man holding torch light standing on red concrete rooftop",
  "assorted-type hand tool lot",
  "brown wooden duck figurine",
  "assorted-tile wall",
  "close-up photo of fire at nighttime",
  "selective focus photography of multicolored confetti lot",
  "man sitting on brown grass field playing with smoke",
  "open book lot",
  "woman with pink lipstick on hole of pink paper",
  "green-leafed plants",
  "pineapple beside person's feet",
  "three men crossing road in front of two buildings during daytime",
  "Do Something Great neon sign",
  "assorted-color stone lot",
  "green plant beside white desk",
  "blue Work Harder neon signage"
];

var imgTags = [
  ["HD Blue Wallpapers","HD Color Wallpapers","Creative Images"],
  ["Nature Images", "Tree Images & Pictures" ],
  ["HD Yellow Wallpapers", "Lego", "Toys Pictures"],
  ["People Images & Pictures", "People Images & Pictures", "Human"],
  ["HD Color Wallpapers", "Light Backgrounds", "HD Neon Wallpapers"],
  ["Coffee Images", "Cup", "Website Backgrounds"],
  ["HD Water Wallpapers", "Sparkle Backgrounds", "Magic"],
  ["HD Water Wallpapers", "Summer Images & Pictures", "HD Pink Wallpapers"],
  ["Rock", "Chair", "Beach Images & Pictures"],
  ["People Images & Pictures", "Japan", "Tokyo"],
  ["HD Pink Wallpapers", "Chair", "Ballon Images"],
  ["HD Neon Wallpapers", "Sign", "Words"],
  ["HD Blue Wallpapers", "HQ Background Images", "Texture Backgrounds"],
  ["Human", "HD Kids Wallpapers", "Candy"],
  ["HD Black & White Wallpapers", "HD White Wallpapers", "Writing"],
  ["People Images & Pictures", "People Images & Pictures", "Human"],
  ["Tools", "Tool"],
  ["Animals Images & Pictures", "Birds Images", "HD Wood Wallpapers"],
  ["HQ Background Images", "Texture Backgrounds", "HD Pattern Wallpapers"],
  ["HD Fire Wallpapers", "Flame", "Bonfire"],
  ["Confetti", "HD Blue Wallpapers", "HQ Backgound Images"],
  ["Nature Images", "Asilah","Morocco"],
  ["HQ Background Images", "Book Images & Photos", "Website Backgrounds"],
  ["Beauty", "Makeup Backgounds", "People Images & Pictures"],
  ["Jar", "Potted Plant", "Pottery"],
  ["Pineapple Backgounds", "Fruits Images & Pictures", "Shoe"],
  ["Building", "HD City Wallpapers", "Urban"],
  ["HD Neon Wallpapers", "Sign", "Motivation"],
  ["Clam", "Stones"],
  ["Quote", "Office", "Plant"],
  ["HD Blue Wallpapers", "HD Neon Wallpapers", "Light Backgrounds"]
];


// testing functions
function onLoad2(){
  // append to div container
  container = document.getElementById('galleryContainer');

  container.appendChild(createRows(100));
  //console.log(container);

  creatImageObjects();
  populateImgTagsFromObjects();


}
function onLoad(){

  // testing the row and col creation
  // init list of div elements
  createRow(34);
  var arrayOfElm = arrayOfDivs;

  // append to div container
  var container = document.getElementById('galleryContainer');

  for(i=0;i<arrayOfDivs.length;i++){
      container.appendChild(arrayOfDivs[i]);
  }
  console.log(container);
  var array = [];

  for(var i=0;i<arrayOfDivs.length;i++){
    array = arrayOfDivs[i];

    for(var j=0;j<array.length;j++){
      console.log(array[j].length);
    // get reference to image nested in col nested in DIV
    var img = array[j].getElementsByTagName('IMG')[0];

    console.log(img.src);
    }
  }


}


// redirect user to site
function redirectToUrl(url){
  var goTo =  confirmation("You are about to leave this page and be redirected to the source code at the url below:\n" + url );
      if(goTo == true)
        window.open(url);
}

// user confirmation
function confirmation(msg){
  return confirm(msg);
}



// create array and manaually push images into array ; return the array
function arrayOfLinks(){
  var stringOfLinks = "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80 https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80 https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80 https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM2OTY0fQ&auto=format&fit=crop&w=700&q=80 https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80 https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80 https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80 https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80 https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=641&q=80 https://images.unsplash.com/photo-1508230820385-aa918ae6eeba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1467139840664-96b244a66825?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80 https://images.unsplash.com/photo-1560963619-c9e49c9380bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80 https://images.unsplash.com/photo-1496483353456-90997957cf99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80 https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80 https://images.unsplash.com/photo-1501457191481-671f811805de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80 https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1361&q=80 https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"


  var array = stringOfLinks.split(" ");
  return array;
}

function creatImageObjects(){

  // init. image objects

  for(i=0;i<links.length;i++){
    var imageObject = new ImageObj(links[i], titleAltText[i], titleAltText[i], imgTags[i], 0,0);
    arrOfImageObj.push(imageObject);
  }// end for

}

// populate img tags with image
function populateImgTags(){
  var links = arrayOfLinks();
  // get reference to div with class name "row"
  // this is the div with the nested columns with images
  var arrOfCols = container.getElementsByClassName('row')[0];
  //var img = arrOfCols.childNodes[0].childNodes[0];
  //console.log(img);
  //console.log(arrOfCols.childNodes.length);
  for(i=0;i<arrOfCols.childNodes.length;i++){
    // get reference to img tag nested in div-row div-col
    var img = arrOfCols.childNodes[i].childNodes[0];
    // set img src attribute to a hyperlink stored in the array
    img.src = links[i%links.length]; // random index
    if(i%links.length == 0){ // if end of array is reached randomize the array
      links = randArrayContent(links);
    }// end if
  }// end for loop
}

// populate img tags with image objects
function populateImgTagsFromObjects(){
  // get reference to div with class name "row"
  // this is the div with the nested columns with images
  var arrOfCols = container.getElementsByClassName('row')[0];

    var index = 1;
  for(i=0;i<arrOfCols.childNodes.length;i++){
    // get reference to img tag nested in div-row div-col
    var img = arrOfCols.childNodes[i].childNodes[0];
    // set img src attribute to a hyperlink stored in the array

    if(index > arrOfImageObj.length){
      index = 1;
    }
    img.src = arrOfImageObj[index-1].src;
    img.alt = arrOfImageObj[index-1].alt;
    img.title = arrOfImageObj[index-1].title;
    if(links.length% index == 0){ // if end of array is reached randomize the array
      //links = randArraySort(links);
    }// end if
      index++;
  }// end for loop
}

// randomize contents of array in image object
function randArraySort(array) {
  links.sort(function(a, b){return 0.5 - Math.random()});
  return array;
}

// randomize contents of array
function randArrayContent(array) {
  array.sort(function(a, b){return 0.5 - Math.random()});
  return array;
}
/*
create a method that will define a new element ( a bootstrap row and with columns )
and assign the appropritate bootstrap classes to the element to create the
desired affects, in this case being rows of images


*/
// this function takes in a number as a param. and
// creates a row with numberOfColumns columns using bootstrap class
function createRow(imgPerPage){
  // default number of columns`
  var colCount = 5;


  // append to div container will be in a separate function
  // get reference to div/container where the row will be appended to
  var container = document.getElementById('galleryContainer');
  //container.innerHTML = "referenced";
  // create new row with 5 columns
   var div = document.createElement("DIV");
  // set div class name to "row" to use bootstrap framework
  div.className = "row";

  while(imgPerPage > 0 ){

    imgPerPage-=5;

    for(var i=0;i<5;i++){

      //create column
      var col = document.createElement("DIV");
      // set div class name to "col" to use bootstrap framework
      col.className = "col-12 col-sm-6 col-lg-3 col-xl-2";
      // create image element
      var img = document.createElement("IMG");
      img.className = "img-thumbnail"
      img.src = "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

      // append image to column and append column to DIV
      col.appendChild(img);
      div.appendChild(col);

    }// end for

    // add div to arrayOfDivs

    arrayOfDivs.push(div);
  }// end while
  /*
  while(imgPerPage > 0 ){

    imgPerPage-=5;
    // create new row with 5 columns
     var div = document.createElement("DIV");
    // set div class name to "row" to use bootstrap framework
    div.className = "row";

    for(var i=0;i<5;i++){

      //create column
      var col = document.createElement("DIV");
      // set div class name to "col" to use bootstrap framework
      col.className = "col-sm-6 col-md-3 col-lg-2";
      // create image element
      var img = document.createElement("IMG");
      img.className = "img-thumbnail"
      img.src = "img\\assorted.jpg";

      // append image to column and append column to DIV
      col.appendChild(img);
      div.appendChild(col);

    }// end for

    // add div to arrayOfDivs

    arrayOfDivs.push(div);
  }// end while
  */

  // note be sure to ensure that numberOfColumns is < zero

}

function createRows(imgCount){
  var div = document.createElement("DIV");
      div.className = "row";
  for(i=0;i<imgCount;i++){
    //create column
    var col = document.createElement("DIV");
    // set div class name to "col" to use bootstrap framework
    col.className = "col-12 col-sm-6 col-lg-3 col-xl-2 pt-3";
    // create image element
    var img = document.createElement("IMG");
    img.className = "img-thumbnail"
    if (document.addEventListener) {                // For all major browsers, except IE 8 and earlier
        img.addEventListener("click", imgEvtHandler, false);
        img.myParam = img.event;
    } else if (document.attachEvent) {              // For IE 8 and earlier versions
        img.attachEvent("onclick", imgEvtHandler, false);
        img.myParam = event;
    }
    // append image to column and append column to DIV
    col.appendChild(img);
    div.appendChild(col);
  }
  return div;
}

// handler for images being clicked
function imgEvtHandler(evt){
  // prevent event from bubbling to parent
  evt.stopPropagation();
  if(windowOnScreen){
    closeWindow();
    return;
  }

  //get image Tags
  //var imageTags = getImageTags(evt.target.title);

  outputTags(getImageTags(evt.target.title));
  // add source info
  document.getElementById('imgSource').childNodes[1].innerHTML = " " + evt.target.src;
  document.getElementById('imgSource').childNodes[1].href = evt.target.src;
  document.getElementById('imgEnlarged').src = evt.target.src;
  document.getElementById('imgDescription').innerHTML = "Description: " + evt.target.title;
  // set more details window to visible
  document.getElementById("moreDetailsWindow").style.visibility = "visible";
    windowOnScreen = true;

  // add onclick attribute to main tag so if the user clicks off the
  // more details window this will close the window
  document.getElementsByTagName("MAIN")[0].addEventListener("click",mainOnClick);

}

// button evnet handler
function closeWindow(){
  // prevent event from bubbling to parent
  event.stopPropagation();
  if(windowOnScreen) {
    document.getElementById("moreDetailsWindow").style.visibility = "hidden";
    windowOnScreen = false;
  }
}

function mainOnClick(){
  if(windowOnScreen){
    closeWindow();
  }
}


// create a template for an image object
function ImageObj (source,name,altText, tags, width,height){
  this.src = source;
  this.title = name;
  this.alt = altText;
  this.tags = tags;
  this.w = width;
  this.h = height;
}

// get image tags from image object array
function getImageTags(title){
  var tags = [];
  for(i=0;i <arrOfImageObj.length;i++){
    if(arrOfImageObj[i].title == title ){
      tags = arrOfImageObj[i].tags;
      break;
    }
  }

  console.log(tags);
  return tags;
}

function outputTags(arrTags){
  var div =  document.getElementById("divOfImgTags");
  for(i=0;i<arrTags.length;i++){
    var span = document.createElement('span');
    span.innerHTML = arrTags[i];
    span.className = "imgTagsSpan";
    div.appendChild(span);
  }// end for
}

// function createRow:
// the user selects from a menu the number of photos to display
// per page. For example 50, 70, 100. base on the number the user
// selects create the appropriate number of rows
// with a default number of columns.
//( note this means you must
// supply the function that creates the number of pages to diplay
// with the number of photos in the folder. for example:
// the folder contains 200 images and the user selects 40 images per page.
// then a function could create 200/40 pages. in this case 5 pages)

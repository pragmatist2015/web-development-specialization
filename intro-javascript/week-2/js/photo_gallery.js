/*Name this external file gallery.js*/
// boo value
var setDefaultTxt = true;
// var to store the default text of the div tag
var defaultTxT;
// init. defaultTxt
defaultTxt = document.getElementById('image').innerHTML;
//document.getElementById('image').onload = defaultTxt = document.getElementById('image').innerHTML;
function upDate(obj){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
	
	// if defaultTxt has not been init.
	if ( setDefaultTxt ) {
		// init. defaultTxt
		defaultTxt = document.getElementById('image').innerHTML;
		//set setDefaultTxt to false
		setDefaultTxt = false;
	}
    // get reference to div with id image
    var frame = document.getElementById('image');
    
    //console.log(frame.tagName);
    // get reference to obj alt text and src        attribute 
    var altTxt = obj.alt;
    var imgSrc = obj.src;
    //console.log(altTxt + "\n" +imgSrc);
    // set frame background image attribute to imgSrc
    // set frame text to altTxt
    frame.style.backgroundImage = "url(" + imgSrc + ")";
    frame.innerHTML = altTxt;
	}

	function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		//console.log(defaultTxt);
    // get reference to div with id image
    var frame = document.getElementById('image');
    // set frame background image to null
    frame.style.backgroundImage = "url('')";
    frame.innerHTML = defaultTxt;
	}
/*Name this external file gallery.js*/
// global var for storing the the div innerHTML
var content = "";

function upDate(previewPic){
 /* In this function you should
    1) change the url for the background image of the div with the id = "image"
    to the source file of the preview image

    2) Change the text  of the div with the id = "image"
    to the alt text of the preview image
    */

    // get reference to div
    var xDiv = document.getElementById('image');

    // store the original innerHTML as a string
    content = xDiv.innerHTML;

    // change xDiv background-image property
    xDiv.style.backgroundImage = "url(" + previewPic.src + ")";

    // change xDiv innerHTML (text)
    xDiv.innerHTML = previewPic.alt;

    // create a highlighted effect
    previewPic.style.border = '10px rgb(200,200,15) solid';
	}

	function unDo(previewPic){
     /* In this function you should
    1) Update the url for the background image of the div with the id = "image"
    back to the orginal-image.  You can use the css code to see what that original URL was

    2) Change the text  of the div with the id = "image"
    back to the original text.  You can use the html code to see what that original text was
    */
    // get reference to div
    xDiv = document.getElementById('image');

    // change xDiv background-image property
    xDiv.style.backgroundImage = "";

    // change xDiv innerHTML (text)
    xDiv.innerHTML = content;

    // undo highlighted effect
    previewPic.style.border = '10px rgb(0,0,0) solid';
	}

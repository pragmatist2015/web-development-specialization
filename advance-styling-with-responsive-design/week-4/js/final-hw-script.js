// set background image to first thumbnail image(this is the default)

// get reference to imageFrame element
var imageFrame = document.getElementById("imageFrame");
// set imageFrame to default image this is a test
window.onload = function loadImage(){
/*
// get reference to imageFrame element
var imageFrame = document.getElementById("imageFrame");
imageFrame.style.backgroundImage = "url('https://s3.us-west-2.amazonaws.com/photos.puppyspot.com/breeds/209/card/500000185_medium.jpg')";
*/
// get reference to enlargedImage element
var enlargedImage = document.getElementById('enlargedImage');
enlargedImage.src='https://s3.us-west-2.amazonaws.com/photos.puppyspot.com/breeds/209/card/500000185_medium.jpg';

}

// this function sets the src attribute of enlargedImage element
function setImage(element){
	// get reference to enlargedImage element
	var enlargedImage = document.getElementById('enlargedImage');
	// set enlargedImage src and alt attribute
	enlargedImage.src=element.src;
	enlargedImage.alt=element.atl;
}
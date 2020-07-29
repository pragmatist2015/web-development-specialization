// varible determines if method has been called
var init = 0;

// auto complete form information with the user specified input
function billingFunction() {
  if(init == 0) {
    set("shippingName");
    set("shippingZip");
    init++;
  }
  // get reference to checkbox element
  var chckBox = document.getElementById('same');
  // checked if checkbox is selected
  // if so copy values from  shipping information
  if(chckBox.checked == true){
    copyInput();
  }
  else{
    clearInput();
  }

}

// add onchange attribute functionality to element by id
// this will auto-complete the billing information if the
// users edits the shipping information and the checkbox is selected
function set(id){
  document.getElementById(id).setAttribute("onchange","billingFunction()");
}

function clearInput(){
  console.log('clearInput call');
  //set billing name and zip to the value provide in shipping informatino
  document.getElementById('billingName').value = "";
  document.getElementById('billingZip').value = "";
}

function copyInput(){
  console.log('copyInput() call');
  //set billing name and zip to the value provide in shipping informatino
  document.getElementById('billingName').value =
    document.getElementById('shippingName').value;
  document.getElementById('billingZip').value =
    document.getElementById('shippingZip').value
}

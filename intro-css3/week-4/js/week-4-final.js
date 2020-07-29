// global variables


// if box is checked copy field values to complete form
function isChecked(){
	// get referene to checkbox with id 'samebillingcheckbox'
	var checkboxSame = document.getElementById('samebillingcheckbox');
	
	//if checkbox is checked
	if ( checkboxSame.checked == true )
	{
		return true;	
	}
	
	return false;
}

// copy user-inputs from both (shippping)name and zip and to (billing) name and zip fields
function copyAndPaste(isChecked){
	
	if(isChecked() == true ){
		// copy name and zip to billing information fields name and zip
		document.getElementById('name_billing').value = document.getElementById('name_shipping').value;
		document.getElementById('zip_code_billing').value = document.getElementById('zip_code_shipping').value;
	}
	else{
		// copy name and zip to billing information fields name and zip
		document.getElementById('name_billing').value ="";
		document.getElementById('zip_code_billing').value = "";
	}
	
}
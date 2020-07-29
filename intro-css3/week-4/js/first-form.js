// validate email
function validateEmail() {
	// get reference to value to compare
	var email = document.getElementById('email');
	var confirmEmail = document.getElementById('confirmemail');
	
	// if email value is equal to confirmEmail value
	if ( email.value == confirmEmail.value )
		// enable submit button
		document.getElementById('submit').disabled = false;
	// else alert user and clear email and confirmEmail values
	else {
		alert(email.value + " email does not match\n" + confirmEmail.value);
		email.value = "";
		confirmEmail.value = "";
		// disnable submit button
		document.getElementById('submit').disabled = true;
	}
}
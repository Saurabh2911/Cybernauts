
function validate_signup()
{

var name = document.signup.name; 
var email = document.signup.email; 
var pass = document.signup.password;

// Check for null entry fill by user
 if (name.value.length <= 0) {  
	 alert("Please enter your Name");  
	 name.focus();  
	 return false;  
 }  

 if (email.value.length <= 0) {  
	 alert("Please enter your Email ID.");  
	 email.focus();  
	 return false;  
 } 
 if (pass.value.length <= 0) {  
	 alert("Please enter password");  
	 pass.focus();  
	 return false;  
 } 

 // validation of length of password
 if (pass.value.length < 8) {  
	 alert("Password length must be of 8 or greater than 8 charaters.");  
	 pass.focus();  
	 return false;  
 } 
 if (pass.value.length > 20) {  
	 alert("Password length must be of less than 20 charaters.");  
	  pass.focus();  
	 return false;  
 }  
	 
 }

 function validate_login()
 {
	var email = document.signin.email; 
	var pass = document.signin.password;

	if (email.value.length <= 0) {  
		alert("Please enter your Email ID.");  
		email.focus();  
		return false;  
	} 
	if (pass.value.length <= 0) {  
		alert("Please enter password");  
		pass.focus();  
		return false;  
	} 
 }

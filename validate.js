function validate(event) {
	event.preventDefault();
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	console.log("Hej");
		
	if(email == "mellepella@gmail.com" && password == "melvin") {
		Redirector.redirect();
		}
	else if(email == "samuelthrnqst@gmail.com" && password == "samuel") {
		Redirector.redirect();
	}
	else {
		Alert.danger();
		}
	}

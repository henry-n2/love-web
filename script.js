
function validate() {
	// body... 
	var usr = document.getElementById('username').value;
	var psw = document.getElementById('password').value;
	if (usr=='@henry-n2'&& psw=='1234') {
		window.open("Main.html",'_self');
		return false;
	} else {
		alert("Bad luck")
	}
}

$(document).ready(function(){
	$('#termsCheckbox').change(function () {
		$('#submitButton').prop("disabled", !this.checked);
	}).change()
})  

function handleClick() {
	firebase.initializeApp(config);
	var data = ({
		name: "Nick",
		response: true
	});
	var pushEntry = firebase.database().ref('Responses/').push();
	pushEntry.set({
		name: "Nick",
		response: true
	});
	console.log(data);
	location.href = "success.html";
}
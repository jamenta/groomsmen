$(document).ready(function(){
	$('#termsCheckbox').change(function () {
		$('#submitButton').prop("disabled", !this.checked);
	}).change()
})

function handleClick() {
	firebase.initializeApp(config);
	location.href = "success.html";
}
$(document).ready(function(){
	$('#termsCheckbox').change(function () {
		$('#submitButton').prop("disabled", !this.checked);
	}).change()
})  

function handleClick(groomsman) {
	database.ref('responses').push().set({
		name: groomsman,
		response: true
	});
	location.href = "success.html";
}
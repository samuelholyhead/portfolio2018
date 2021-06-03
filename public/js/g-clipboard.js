document.addEventListener("DOMContentLoaded", function(event) {

	console.log("case-study-page.js DOMContentLoaded");
	
	var clipboard = new ClipboardJS('.hp_contactFormCopyButton');

	if (document.getElementById("copyDesktopEmail") != null) {
		document.getElementById("copyDesktopEmail").addEventListener("click", function() {
			var x = document.getElementById("copyDesktopEmailFeedback");
			copyFeedback(x); });}

	if (document.getElementById("copyDesktopCall") != null) {
		document.getElementById("copyDesktopCall").addEventListener("click", function() {
			var x = document.getElementById("copyDesktopCallFeedback");
			copyFeedback(x); });}

});

function copyFeedback(feedbackDiv) {

	feedbackDiv.src = "img/ui_copy_feedback.svg";

	setTimeout(function() {
		feedbackDiv.src = "img/ui_copy.svg";
	}, 1500);
}




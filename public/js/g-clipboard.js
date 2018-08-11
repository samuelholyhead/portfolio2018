document.addEventListener("DOMContentLoaded", function(event) {

	console.log("case-study-page.js DOMContentLoaded");
	
	var clipboard = new ClipboardJS('.cs_contactFormCopyButton');

	if (document.getElementById("copyDesktopEmail") != null) {
		document.getElementById("copyDesktopEmail").addEventListener("click", function() {
			var x = document.getElementById("copyDesktopEmailFeedback");
			copyFeedback(x); });}

	if (document.getElementById("copyDesktopCall") != null) {
		document.getElementById("copyDesktopCall").addEventListener("click", function() {
			var x = document.getElementById("copyDesktopCallFeedback");
			copyFeedback(x); });}

	if (document.getElementById("copyMobileEmail") != null) {
		document.getElementById("copyMobileEmail").addEventListener("click", function() {
			var x = document.getElementById("copyMobileEmailFeedback");
			copyFeedback(x); });}

	if (document.getElementById("copyMobileCall") != null) {
		document.getElementById("copyMobileCall").addEventListener("click", function() {
			var x = document.getElementById("copyMobileCallFeedback");
			copyFeedback(x); });}
});

function copyFeedback(feedbackDiv) {

	feedbackDiv.src = "img/ui-copy-successful.svg";

	setTimeout(function() {
		feedbackDiv.src = "img/ui-copy.svg";
	}, 1500);
}




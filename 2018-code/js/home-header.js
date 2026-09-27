document.addEventListener("DOMContentLoaded", function(event) {

	console.log("home-header.js DOMContentLoaded");
	document.getElementById("headerText").innerHTML = "";
  setTimeout(function(){ typeString("Hello! What are you looking for?"); }, 300);

  	let deg = 135
  	let tick = () => {
  	  document.getElementById("hp_headerCont").style.background = `background linear-gradient(${deg++}deg, #FF7361 0%, #FF4D6B 100%)`
  	  requestAnimationFrame(tick)
  	}
  	requestAnimationFrame(tick)
});

function typeString(str) {
  let arr = Array.from(str);

  for (var i = 0; i < arr.length; i++) {
    setTimeout(function(x) { return function () {
      document.getElementById("headerText").innerHTML = document.getElementById("headerText").innerHTML + arr[x];
    }; }(i), 48*i);
  }
}
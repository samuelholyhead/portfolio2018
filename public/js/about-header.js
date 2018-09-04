document.addEventListener("DOMContentLoaded", function(event) {

	console.log("home-header.js DOMContentLoaded");
	document.getElementById("headerText").innerHTML = "";
	typeString("What would you like know about me?");

  	let deg = 135
  	let tick = () => {
  	  document.getElementById("hp_headerCont").style.background = `background linear-gradient(${deg++}deg, #BD61FF 0%, #8445F7 100%)`
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
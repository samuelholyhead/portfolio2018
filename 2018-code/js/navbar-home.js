document.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById("navBar").classList.remove("g_navBarBG");

  // CSS animations take 0.6s to settle which throw off the calculations, wait before running

  setTimeout(function () {}, 700);

	console.log("navbar.js DOMContentLoaded");
	
	var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
	
	window.onscroll= function() {
   		var st = window.pageYOffset || document.documentElement.scrollTop; 
      var bottom = document.body.scrollHeight - window.innerHeight - 10;

      if (st <= 450) {
        document.getElementById("navBar").style.backgroundImage = ("none");
        document.getElementById("navBar").classList.remove("g_navBarBG");
      } else {
        document.getElementById("navBar").style.backgroundImage = ("linear-gradient(135deg, #FF6E61 0%, #F84660 100%");
        document.getElementById("navBar").classList.add("g_navBarBG");
      }

   		if ((st > lastScrollTop) && (st >= 0)) {
          //Scroll down
          if (document.getElementById("navBar").style.top === "0px") {
            document.getElementById("navBar").style.top = st + "px";
          }
       		document.getElementById("navBar").style.position = "absolute";

          if ((document.getElementById("navBar").offsetTop + document.getElementById("navBar").clientHeight) < st) {
            document.getElementById("navBar").classList.remove("animateNavIn");
          }
   		} else {
          //Scroll up

          if (st <= bottom) {
            // Not past the bottom of the page
            if (((document.getElementById("navBar").offsetTop + document.getElementById("navBar").clientHeight) < st) 
                || document.getElementById("navBar").offsetTop > st) 
            {
              if (document.getElementById("navBar").offsetTop != st) {
                document.getElementById("navBar").classList.add("animateNavIn");
              }
              document.getElementById("navBar").style.top = "0px";
              document.getElementById("navBar").style.position = "fixed";
            }
          }
   		}
   	  lastScrollTop = st;
	};

});
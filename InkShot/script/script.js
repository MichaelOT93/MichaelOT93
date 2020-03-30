
		window.onscroll = function() {scrollFunction()};
		
		function scrollFunction(){
		if (document.body.scrolltop > 80 || document.documentElement.scrollTop > 80){
		document.getElementById("navBar").style.opacity = "80%";
		document.getElementById("navBar").style.padding = "0px 0px";
		document.getElementById("logo").style.top = "2px";
		document.getElementById("buffer").style.opacity = "0%";
		
		
		
		
		
	
		} else {
		document.getElementById("navBar").style.opacity = "100%";
		document.getElementById("navBar").style.padding = "10px 0px";
		document.getElementById("logo").style.top = "10px";
		document.getElementById("buffer").style.opacity = "100%";
		
		}
		}
		
		
		
		



		
		
	
		
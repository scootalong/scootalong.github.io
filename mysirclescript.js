/*Tracks current mouse position */
	var xMouse = null;
	var yMouse = null;
	
	

function mouseCoords(event){
	var xMouse = event.clientX;
	var yMouse = event.clientY;
	var Coords = "X coords: " + xMouse + ", Y coords: " + yMouse;
	document.getElementById("mouse-coordinates").innerHTML = Coords;
	return (xMouse,yMouse);
}




/*Calculates size of playfield*/
function calcSize() {
	var Xwidth = document.getElementById("play-field").clientWidth;
	var Yheight = document.getElementById("play-field").clientHeight;
	var size = Xwidth + "px" + Yheight + "px";
	document.getElementById("field-size").innerHTML = size;
	/* return Xwidth, Yheight; */

}

/*Produces a random integer winthin a range*/
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/*Start and stops a counter when mouse enters and leaves sircle*/
var total = 0; 
var counterID = null;

function startTimer() {
	counterID = setInterval(countScore,50);
}
function stopTimer() {
	clearInterval(counterID);	
}


function countScore() {
	var score = document.getElementById("score");
	total++;
	score.innerHTML = total;
	
	/*Positions score to center of the sircle as it grows*/
	if (total >= 10 && total < 19) {
		score.style.right = "30px";
	} else if (total >= 20 && total < 99) {
		score.style.right ="20px";
	} else if (total >= 100) {
		score.style.right ="15px";
		score.style.fontSize = "2.7rem";
	}
}


/* starts a countdown timer and initates the game */
function play() {
	var main = document.getElementById("main");
	var menu = document.getElementById("menu");
	var square = document.getElementById("square");
	
	var timeleft = 30; 
	var timedisplay = document.getElementById('countdown');
	var timerID = setInterval(countdown, 1000);
	
	
	
	main.style.opacity = 1; 
	menu.style.display = "none";
	square.style.display = "block";
	
	timedisplay.style.color = "white"; 
	timedisplay.innerHTML = "---------";
	score.style.right = "35px";

	
	function countdown() {
	if (timeleft == -1) {
		clearTimeout(timerID);
		gameover();
	} else if (timeleft <= 5 && timeleft >= 2) {
		timedisplay.innerHTML = 'Time:' + timeleft;
		timeleft--;
		timedisplay.style.color = "yellow";
	} else if (timeleft <= 1) {
		timedisplay.innerHTML = 'Time:' + timeleft;
		timeleft--;
		timedisplay.style.color = "red";		
	} else {
		timedisplay.innerHTML = 'Time:' + timeleft;
		timeleft--;
		}
	}
}

function gameover () {
	var menu = document.getElementById("menu");
	var square = document.getElementById("square");
	var main = document.getElementById("main");
	
	menu.style.display = "block";
	square.style.display = "none";
	main.style.opacity = "0.7";
	total = 0;
	score.innerHTML = total;
	
}

/*Moves sircle to a random position */
function sirclemove() {
	/*Finds current Mouse Coordinates - Should call mouseCoords function in future update*/
	var xMouse = event.clientX;
	var yMouse = event.clientY;
	var check = false;
	
	var mysquare = document.getElementById("square");
	var mydot = document.getElementById("dot");
	var buffersquare = document.getElementById("buffersquare");

	
	/*Finds the size of the current play field */
	var Xwidth = document.getElementById("play-field").clientWidth;
	var Yheight = document.getElementById("play-field").clientHeight;
	
	/*Creates a buffer of 200px from the border of play field*/
	var Xrange = (Xwidth - 200);
	var Yrange = (Yheight- 200); 
	
	
	
	var Xrandom = getRndInteger(0,Xrange) + "px";
	var Yrandom = getRndInteger(0,Yrange) + "px"; 
	var XYCoords = (Xrandom + "," + Yrandom)
	
	document.getElementById("Xrandom-int").innerHTML = Xrandom;
	document.getElementById("Yrandom-int").innerHTML = Yrandom;
	mysquare.style.transform = "translateX(" + Xrandom + ")" + "translateY(" + Yrandom + ")";
	mydot.style.transform = "translateX(" + Xrandom + ")" + "translateY(" + Yrandom + ")";

	
	
}





/*Shows/hides dev info when clicked*/
function viewControls() {
	var controls = document.getElementById("dev-info");
	var mysquare= document.getElementById("square");
	var mydot = document.getElementById("dot");
	var buffersquare = document.getElementById("buffersquare");
	var menu = document.getElementById("menu");
	var main = document.getElementById("main");

	
	if (controls.style.display === "inline") {
		controls.style.display = "none";
		mysquare.style.backgroundColor = "rgba(255,255,255,0.0)";
		buffersquare.style.backgroundColor = "rgba(3, 252, 240,0.0)";
		mydot.style.display = "none";
		menu.style.display = "none";
		main.style.opacity = "1";
		
		
		
	} else {
		controls.style.display = "inline";
		mysquare.style.backgroundColor = "rgba(255,255,255,0.1)";
		buffersquare.style.backgroundColor = "rgba(3, 252, 240,0.1)";
		mydot.style.display = "block";
		menu.style.display = "block";
		main.style.opacity = "0.7";
		
	}
}
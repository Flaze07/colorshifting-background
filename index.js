var bg = document.getElementById("bg-col");
var txt = document.getElementById("text-col");

var darkCol = "rgb(17, 17, 17)";
var lightCol = "rgb(220, 220, 220)";

var screenWidth = window.screen.availWidth;

var firstTime = false;
var oldPos;

var mousePos;

var checkAnimateTimeout;

function handleMouseMovement(event) {
	if(!firstTime) {
		oldWidth = event.pageX;
		var widthPercentage = (oldWidth * 100) / screenWidth;
		bg.style.background = changeColorPercentage(darkCol, lightCol, widthPercentage);
		var txtStyle = ";font-size: 140px;background-clip: text;-webkit-background-clip:  text;-webkit-text-fill-color:  transparent;";
		txt.setAttribute("style", "background: " + changeColorPercentage(lightCol, darkCol, widthPercentage) + txtStyle);
		firstTime = true;
		animateColorChange();
	} else {
		mousePos = event.pageX;
	}
}

function animateColorChange() {
	oldWidth = lerp(oldWidth, mousePos, 0.1);
	console.log(oldWidth);
	var widthPercentage = (oldWidth * 100) / screenWidth;
	bg.style.background = changeColorPercentage(darkCol, lightCol, widthPercentage);
	var txtStyle = ";font-size: 140px;background-clip: text;-webkit-background-clip:  text;-webkit-text-fill-color:  transparent;";
	txt.setAttribute("style", "background: " + changeColorPercentage(lightCol, darkCol, widthPercentage) + txtStyle);
	setTimeout(animateColorChange, 10);
}

function changeColorPercentage(firstCol, secondCol, percentage) {
	return "linear-gradient(to right, " + firstCol + " " + percentage + "%, " + secondCol + " " + percentage + "%)";
}

window.addEventListener("mousemove", handleMouseMovement);
window.addEventListener("mouseon", e => console.log("yes"));

//helper function gathered form internet
function lerp(a, b, n) {
	var result = (1-n) * a + n * b;
	if(isNaN(result)) {
		result = b;
	}
	return result;
}

// font-size: 140px;
// 	background:  linear-gradient(to right, rgb(220, 220, 220) 10%, rgb(17, 17, 17) 10%);
// 	background-clip: text;
// 	-webkit-background-clip:  text;
// 	-webkit-text-fill-color:  transparent;
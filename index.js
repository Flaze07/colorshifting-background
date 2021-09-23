var bg = document.getElementById("bg-col");
var txt = document.getElementById("text-col");

var darkCol = "rgb(17, 17, 17)";
var lightCol = "rgb(220, 220, 220)";

var screenWidth = window.screen.availWidth;

var firstTime = false;
var oldWidth;

var checkAnimateTimeout;

function handleMouseMovement(event) {
	var widthPercentage = (event.pageX * 100) / screenWidth;
	if(!firstTime) {
		firstTime = true;
		bg.style.background = changeColorPercentage(darkCol, lightCol, widthPercentage);
		var txtStyle = ";font-size: 140px;background-clip: text;-webkit-background-clip:  text;-webkit-text-fill-color:  transparent;";
		txt.setAttribute("style", "background: " + changeColorPercentage(lightCol, darkCol, widthPercentage) + txtStyle);
		oldWidth = event.pageX;
	} else {
		if(checkAnimateTimeout) {
			clearTimeout(checkAnimateTimeout);
		}
		animateColorChange(event.pageX);
	}
}

function animateColorChange(mousePos) {
	oldWidth = lerp(oldWidth, mousePos, 0.5);
	var widthPercentage = (oldWidth * 100) / screenWidth;
	bg.style.background = changeColorPercentage(darkCol, lightCol, widthPercentage);
	var txtStyle = ";font-size: 140px;background-clip: text;-webkit-background-clip:  text;-webkit-text-fill-color:  transparent;";
	txt.setAttribute("style", "background: " + changeColorPercentage(lightCol, darkCol, widthPercentage) + txtStyle);
	if(oldWidth != mousePos) {
		checkAnimateTimeout = setTimeout(animateColorChange, 100);
	}
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
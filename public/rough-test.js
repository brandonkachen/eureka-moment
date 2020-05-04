window.addEventListener("load", windowLoadHandler, false);

//for debug messages
var Debugger = function() { };
Debugger.log = function(message) {
	try {
		console.log(message);
	}
	catch (exception) {
		return;
	}
}

function windowLoadHandler() {
	var box = document.getElementById('test');
	var canvasOne = document.getElementById('canvasOne');
	canvasOne.width = box.offsetWidth + 100;
	canvasOne.height = box.offsetHeight * 3 + 100;

	var rc = rough.canvas(canvasOne);
	rc.rectangle(10, 10, canvasOne.width - 80, canvasOne.height - 100); // x, y, width, height
	

	var canvasTwo = document.getElementById('canvasTwo');
	canvasTwo.width = box.offsetWidth + 100;
	canvasTwo.height = box.offsetHeight * 3 + 100;

	var rc = rough.canvas(canvasTwo);
	rc.rectangle(
		10, 10, canvasTwo.width - 80, canvasTwo.height - 100,
		{ bowing: 2, stroke: 'white', strokeWidth: 2 });
	

	var canvasThree = document.getElementById('canvasThree');
	canvasThree.width = box.offsetWidth + 100;
	canvasThree.height = box.offsetHeight * 3.5 + 100;

	var rc = rough.canvas(canvasThree);
	rc.rectangle(
		10, 10, canvasThree.width - 80, canvasThree.height - 100,
		{ bowing: 2, stroke: 'green', strokeWidth: 2 });
	
	
	// var canvasFour = document.getElementById('canvasFour');
	// canvasFour.width = box.offsetWidth + 100;
	// canvasFour.height = box.offsetHeight + 100;
	// rc.circle(100, 250, 80, {
	// 	fill: "rgb(10,150,10)",
	// 	fillWeight: 3 // thicker lines for hachure
	//   });
}
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
	canvasApp();
}

function canvasSupport() {
	return Modernizr.canvas;
}

function canvasApp() {
	if (!canvasSupport()) {
		return;
	}
	
	var theCanvas = document.getElementById("canvasOne");
	var context = theCanvas.getContext("2d");
	var displayWidth = theCanvas.width;
	var displayHeight = theCanvas.height;
	
	var lineColor;
	var lineWidth;
	
	var drawCount;
	
	init();
	
	function init() {
		
		generate();
		
		theCanvas.addEventListener("click", clickListener, false);
		
		drawCount = 0;
	}
		
	function clickListener(evt) {
		context.clearRect(0,0,theCanvas.width,theCanvas.height);
		generate();
		
		//code below prevents the mouse down from having an effect on the main browser window:
		if (evt.preventDefault) {
			evt.preventDefault();
		} //standard
		else if (evt.returnValue) {
			evt.returnValue = false;
		} //older IE
		return false;
	}
	
	function setLinePoints(iterations) {
		var pointList = {};
		pointList.first = {x:0, y:1};
		var lastPoint = {x:1, y:1}
		var minY = 1;
		var maxY = 1;
		var point;
		var nextPoint;
		var dx, newX, newY;
		var ratio;
		
		var minRatio = 0.33;
		
		pointList.first.next = lastPoint;
		for (var i = 0; i < iterations; i++) {
			point = pointList.first;
			while (point.next != null) {
				nextPoint = point.next;
				
				ratio = minRatio + Math.random()*(1 - 2*minRatio);
				newX = point.x + ratio*(nextPoint.x - point.x);
				
				//find the smaller interval
				if (ratio < 0.5) {
					dx = newX - point.x;
				}
				else {
					dx = nextPoint.x - newX;
				}
				
				newY = point.y + ratio*(nextPoint.y - point.y);
				newY += dx*(Math.random()*2 - 1);
				
				var newPoint = {x:newX, y:newY};
				
				//min, max
				if (newY < minY) {
					minY = newY;
				}
				else if (newY > maxY) {
					maxY = newY;
				}
				
				//put between points
				newPoint.next = nextPoint;
				point.next = newPoint;
				
				point = nextPoint;
			}
		}
		
		//normalize to values between 0 and 1
		if (maxY != minY) {
			var normalizeRate = 1/(maxY - minY);
			point = pointList.first;
			while (point != null) {
				point.y = normalizeRate*(point.y - minY);
				point = point.next;
			}
		}
		
		//unlikely that max = min, but could happen if using zero iterations. In this case, set all points equal to 1.
		else {
			point = pointList.first;
			while (point != null) {
				point.y = 1;
				point = point.next;
			}
		}
				
		return pointList;		
	}
		
	function generate() {
		var x0, y0, w, h;
		var lineColor;
		var fillColor;
		
		var numRects = 3;
		var gap = 0;
		var stripeHeight = (displayHeight - 20)/numRects - gap;
		var startX = 5;
		var startY = 5;
				
		for (var i = 0; i < numRects; i++) {
			//random color, but favoring red and green.
			r = Math.floor(Math.random()*255);
			g = Math.floor(Math.random()*220);
			b = Math.floor(Math.random()*120);
			a = 0.4;
			
			fillColor = "rgba("+r+","+g+","+b+","+a+")";
			lineColor = "rgba("+r+","+g+","+b+","+a+")";
			
			w = displayWidth - 30;
			h = stripeHeight;
			
			x0 = startX ;
			y0 = startY + i*(stripeHeight+gap);
			
			drawRect(x0,y0,w,h,lineColor,fillColor);
			
		}
		
				
	}
	
	function drawRect(x0,y0,w,h,lineColor,fillColor) {
		var cornerDrift = 3;
		var drawDriftX = 1;
		var drawDriftY = 6;
		var corner = [];
		var driftVector = [];
		var pointList;
		var i,j;
		var nextCorner;
		var nextX, nextY;
		var functionPoint;
		var endpointY;
		
		x0 += cornerDrift*(2*Math.random()-1);
		y0 += cornerDrift*(2*Math.random()-1);
		
		for (i = 0; i < 4; i++) {
			corner[i] = {};
		}
		
		corner[0].x = x0 + cornerDrift*(Math.random()*2 - 1);
		corner[0].y = y0 + cornerDrift*(Math.random()*2 - 1);
		
		corner[1].x = x0 + w + cornerDrift*(Math.random()*2 - 1);
		corner[1].y = y0 + cornerDrift*(Math.random()*2 - 1);
		
		corner[2].x = x0 + w + cornerDrift*(Math.random()*2 - 1);
		corner[2].y = y0 + h + cornerDrift*(Math.random()*2 - 1);
		
		corner[3].x = x0 + cornerDrift*(Math.random()*2 - 1);
		corner[3].y = y0 + h + cornerDrift*(Math.random()*2 - 1);
		
		driftVector[0] = {x:0, y:drawDriftY};
		driftVector[1] = {x:drawDriftX, y:0};
		driftVector[2] = {x:0, y:drawDriftY};
		driftVector[3] = {x:drawDriftX, y:0};
		
		//setting iterates as an array, because some sides will be very short, and a large number of iterates will be wasteful.
		var iterates = [8,5,8,5];
		
		//draw
		context.strokeStyle = lineColor;
		context.fillStyle = fillColor;
		context.lineWidth = 1;
		context.beginPath();
		context.moveTo(corner[0].x,corner[0].y);
		for (i = 0; i < 4; i++) {
			nextCorner = corner[(i + 1) % 4];
			pointList = setLinePoints(iterates[i]);
			functionPoint = pointList.first;
			endpointY = functionPoint.y;
			while (functionPoint != null) {
				nextX = corner[i].x + functionPoint.x*(nextCorner.x - corner[i].x);
				nextY = corner[i].y + functionPoint.x*(nextCorner.y - corner[i].y);
				nextX += driftVector[i].x*(functionPoint.y - endpointY);
				nextY += driftVector[i].y*(functionPoint.y - endpointY);
				context.lineTo(nextX, nextY);
				functionPoint = functionPoint.next;
			}
		}
		context.stroke();
		context.fill();
	}
}
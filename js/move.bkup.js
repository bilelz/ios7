window.addEventListener("deviceorientation", handleOrientation, true);
      	var lastMoveTime = 0;
      	document.body.onmousemove=function(event){
      		
      		// move BG only 100ms after the last move
      		if((new Date()).getTime() > lastMoveTime+100){
      		
				var centerX = document.body.offsetWidth/2;
				var centerY = document.body.offsetHeight/2;
				var bgX =  (centerX - event.x)/5;
				var bgY =  (centerY - event.y)/5;
				
				
				
				//console.log(bgX+"px "+bgY+"px");
				document.querySelector("#bg").style.backgroundPosition = bgX+"px "+bgY+"px";
				
				lastMoveTime = (new Date()).getTime();
			}
      	};


var lastMoveTime = 0;
function handleOrientation(event) {

	// move BG only 300ms after the last move
	if ((new Date()).getTime() > lastMoveTime + 300) {

		var absolute = event.absolute;
		var alpha = event.alpha * (-1);
		var beta = event.beta * (-1 / 3);
		var gamma = event.gamma * (-1 / 3);

		// Do stuff with the new orientation data
		document.querySelector("#bg").style.backgroundPosition = gamma + "px " + beta + "px";
		lastMoveTime = (new Date()).getTime();
	}
}

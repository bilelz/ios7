
require.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: '../bower_components/html5-boilerplate/js/vendor/jquery-1.10.2.min',
        async: '../bower_components/requirejs-plugins/src/async',
        goog: '../bower_components/requirejs-plugins/src/goog',
        angular : '../bower_components/angular/angular.min',
        angularroute : '../bower_components/angular-route/angular-route',
        angularresource: "../bower_components/angular-resource/angular-resource",
        moment : '../bower_components/moment/moment',
        iscroll : '../bower_components/iscroll/build/iscroll',
        iscrollprobe : '../bower_components/iscroll/build/iscroll-probe',
        angularanimate : '../bower_components/angular-animate/angular-animate'//,
        //project : 'project'
    },
  shim: {
    'jquery': {'exports' : 'jquery'},
    'angular' : {'exports' : 'angular'},  
    'angularroute': ['angular'],   
    'angularresource': ['angular'],   
    'angularanimate': ['angular'],
  },
	priority: [
		"angular"
	]
});
/*
require(['angular', 'project'], function (angular,app) {
  app.init();
});*/

require( [
	'angular',
	'angularroute',
	'angularresource',
	'angularanimate',
	'app',
	'filters',
	'services',
	'controllers.22',
	'routes.22',
	'jquery'
], function(angular, app, routes, controllers) {
	'use strict';

	angular.element().ready(function(app) {
		angular.bootstrap(document, ['ios']);
      	
      	window.addEventListener("deviceorientation", handleOrientation, true);
      	document.body.onmousemove=function(event){
      		console.log(event);
			var centerX = document.body.offsetWidth/2;
			var centerY = document.body.offsetHeight/2;
			var bgX =  (centerX - event.x)/5;
			var bgY =  (centerY - event.y)/5;
			
			
			
			console.log(bgX+"px "+bgY+"px");
			document.querySelector("#bg").style.backgroundPosition = bgX+"px "+bgY+"px";
      	};
	});
});


function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
  
    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { left: xPosition, top: yPosition };
}




function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma*3;
	
	//document.querySelector("#bigPicture").style.backgroundPosition = -gamma+"px 0px";
	var imgList = document.querySelectorAll("a.listBlock div.imgLoaded");
	for(var i = 0; i < imgList.length; i++) {
		            	 imgList[i].style.backgroundRepeat = "repeat-x";
		                imgList[i].style.backgroundPosition = -gamma+"px 0px";
		            }
  // Do stuff with the new orientation data
}


function showLoader(){
	document.getElementById("loader").style.display ="block";
}

function hideLoader(){
	document.getElementById("loader").style.display ="none";
}


function showInfo(text, hideDelay){
	$("#info").html(text).show();
	if(hideDelay != undefined && hideDelay){
		setTimeout(hideInfo, 1000);
	}
}

function hideInfo(){
	$("#info").hide();
}


function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha * (-1);
  var beta     = event.beta * (-1/3);
  var gamma    = event.gamma * (-1/3);
	

  // Do stuff with the new orientation data
  document.querySelector("#bg").style.backgroundPosition = gamma+"px "+ beta+"px";
}

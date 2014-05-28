define(['angular','app'], function(angular, app)
{
	
	 app.controller(
        'LockController', ['$scope', '$location', '$http', 'caldevServices' , 'Page',
        function($scope, $location, $http, caldevServices, Page) {
            

			Page.setTitle("iOS7 - Lockscreen");
			
			var myScroll;
			var point, pointStartX, pointStartY, deltaX, deltaY;
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: false,
				click : true,
				eventPassthrough: true,
				preventDefault: false,
				momentum: false,
				snap: true,
				snapSpeed: 400,
				keyBindings: true,
				indicators: {
					el: document.getElementById('indicator'),
					resize: false
				}
			});
			
			myScroll.on('scrollEnd', function () {
			    console.log(this.currentPage.pageX);
			    if(this.currentPage.pageX == 0){
			    	$("#lock-bg").addClass("blur");
			    }else{
			    	$("#lock-bg").removeClass("blur");
			    }
			    
			    
			});
			
			$("#home").click(function(){ myScroll.goToPage(1, 0, 1000); console.log("home"); });
			$("#prev").click(function(){ myScroll.prev(1000); });
			$("#next").click(function(){ myScroll.next(1000); });
			$scope.pageClass = 'page-lock';	
			
			$("#lock-clock").text(moment(new Date()).format("hh:mm"));
			$("#lock-date").text(moment(new Date()).format("dddd, MMMM DD"));
			myScroll.next(0);
			
			var code = "";
			
			$scope.code = '';
			$scope.num = function(index) {

			    
			    if($scope.code.length < 4){
					$scope.code += index;
					console.log($scope.code);
					$("#lock-indicator span").removeClass("active");
					$("#lock-indicator span:nth-child(-n+"+$scope.code.length+")").addClass("active");
					if($scope.code.length == 4){
						$location.path("/home");
					}
				}
			 };
			
			
			$scope.deletenum = function(index) {

				if($scope.code.length>0){
					$scope.code = $scope.code.slice(null,$scope.code.length-1);
					console.log($scope.code);
				}
				
				$("#lock-indicator span").removeClass("active");
				$("#lock-indicator span:nth-child(-n+"+$scope.code.length+")").addClass("active");

			 };
			
        }]
    );
    
    app.controller(
        'HomeController', ['$scope', '$location', '$http', 'caldevServices' , 'Page',
        function($scope, $location, $http, caldevServices, Page) {
            

			Page.setTitle("iOS7 - HTML5");
			
			var myScroll;
			var point, pointStartX, pointStartY, deltaX, deltaY;
			myScroll = new IScroll('#wrapper', {
				scrollX: true,
				scrollY: false,
				click : true,
				eventPassthrough: true,
				preventDefault: false,
				momentum: false,
				snap: true,
				snapSpeed: 400,
				keyBindings: true,
				indicators: {
					el: document.getElementById('indicator'),
					resize: false
				}
			});
			
			$("#home").click(function(){ myScroll.goToPage(0, 0, 1000); console.log("home"); });
			$("#prev").click(function(){ myScroll.prev(1000); });
			$("#next").click(function(){ myScroll.next(1000); });
			$scope.pageClass = 'page-home';	
			
			//ios clock
			for(var i=0;i<12;i++){
				$(".ios-clock").append("<span class='ios-clock-hours' style='-webkit-transform: rotate("+(i-2)*30+"deg) translateX(2em);'><span  style='-webkit-transform: rotate("+(-1)*(i-2)*30+"deg)'>"+(i+1)+"</span></span>");
			}
			
			setInterval(function(){
				var now = new Date();
				var hour = (now.getHours()<=12)?now.getHours():now.getHours()-12;
				var min = now.getMinutes();
				var sec = now.getSeconds();
				$(".ios-clock-bar-hour").css({	"-webkit-transform":"rotate("+(hour*30-90)+"deg)",
												"-moz-transform":"rotate("+(hour*30-90)+"deg)",
												"transform":"rotate("+(hour*30-90)+"deg)" });
				$(".ios-clock-bar-min").css({	"-webkit-transform":"rotate("+(min*6-90)+"deg)",
												"-moz-transform":"rotate("+(min*6-90)+"deg)",
												"transform":"rotate("+(min*6-90)+"deg)" });
				if(sec==0){
					$(".ios-clock-bar-sec").css({	"transition":"0s"});
				}
				$(".ios-clock-bar-sec").css({	"-webkit-transform":"rotate("+(sec*6-90)+"deg)",
												"-moz-transform":"rotate("+(sec*6-90)+"deg)",
												"transform":"rotate("+(sec*6-90)+"deg)" });
				if(sec==0){
					$(".ios-clock-bar-sec").css({	"transition":"1s"});
				}
			},1000);
        }]
    );
    
    app.controller('MapController', ['$scope', '$location','$routeParams', '$http', 'caldevServices' ,'Page',
    	function($scope,$location, $routeParams, $http, caldevServices, Page) {
		
		var x = document.getElementById("demo");
		  require(['async!http://maps.google.com/maps/api/js?v=3.exp&key=&AIzaSyD4uf0OUj3T-TAHUxqW5luo6d6Z-Br1_sosensor=false&&libraries=places'], function(){
				var mapOptions = {
			    center: new google.maps.LatLng(48.8588589,2.3470599),
			    zoom: 5,
			    disableDefaultUI: true
			  };
			  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			  
			  showInfo("geolocation user request...");
	  		  if (navigator.geolocation){
				    navigator.geolocation.getCurrentPosition(function(position){
				    	showInfo("Thanks", true);
				    	map.panTo(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
				    	console.log("Latitude: " + position.coords.latitude + " / Longitude: " + position.coords.longitude);
				    }, showError);
			   }else{
				  	showInfo("Change your device, it don't support geelocation!");
			  }

			function showError(error)
			  {
			  switch(error.code) 
			    {
			    case error.PERMISSION_DENIED:
			      showInfo("You denied the request for Geolocation!!!! <br/>How can I work now! GRRRRRR", true);
			      break;
			    case error.POSITION_UNAVAILABLE:
			      showInfo("Location information is unavailable! BOUH!")
			      break;
			    case error.TIMEOUT:
			      showInfo("The request to get user location timed out. <br/>Please, wake up.")
			      break;
			    case error.UNKNOWN_ERROR:
			      showInfo("An unknown error occurred. <br/>Not my fault.");
			      break;
			    }
			  }
			  
			   var input =  document.getElementById('adress');
			   var types = document.getElementById('type-selector');
			
			  var autocomplete = new google.maps.places.Autocomplete(input);
			  autocomplete.bindTo('bounds', map);
			
			  var infowindow = new google.maps.InfoWindow();
			  var marker = new google.maps.Marker({
			    map: map
			  });
			  			   
			   google.maps.event.addListener(autocomplete, 'place_changed', function() {
			    var place = autocomplete.getPlace();
			    if (!place.geometry) {
			      return;
			    }
			    
			    infowindow.close();
			    marker.setVisible(false);
			    
			
			    // If the place has a geometry, then present it on a map.
			    if (place.geometry.viewport) {
			      map.fitBounds(place.geometry.viewport);
			    } else {
			      map.panTo(place.geometry.location);
			    }
			    marker.setIcon(({
			      url: place.icon,
			      size: new google.maps.Size(71, 71),
			      origin: new google.maps.Point(0, 0),
			      anchor: new google.maps.Point(17, 34),
			      scaledSize: new google.maps.Size(35, 35)
			    }));
			    marker.setPosition(place.geometry.location);
			    marker.setVisible(true);
			
			    var address = '';
			    if (place.address_components) {
			      address = [
			        (place.address_components[0] && place.address_components[0].short_name || ''),
			        (place.address_components[1] && place.address_components[1].short_name || ''),
			        (place.address_components[2] && place.address_components[2].short_name || '')
			      ].join(' ');
			    }
			
			    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
			    //infowindow.open(map, marker);
			  });
			});	
	
		  
		}]
	);

	app.controller('Controller', ['$scope', '$location','$routeParams', '$http', 'caldevServices' ,'Page',
		function ($scope, $http, $location, $routeParams, caldevServices, Page){
			hideInfo();
	
		}]
	);

		
    
});
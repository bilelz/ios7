define("app", ["angular", "angularresource", "angularroute", "angularanimate"], function(angular) {
    var app = angular.module("ios", ["ngResource", "ngRoute", "ngAnimate", "calendarFilters"] )
    //global event handler
			.run(function($rootScope, $window) {
				$rootScope.slide = '';
				console.log("root slide init");
				$rootScope.$on('$routeChangeStart', function() {
					//event button to move backward
					$rootScope.back = function() {
						$rootScope.slide = 'slide-right';
						console.log("root back");
						$window.history.back();
					};
					//event button item list to move forward
					$rootScope.next = function() {
						$rootScope.slide = 'slide-left';
						console.log("root next");
					};
				});
			});
    // you can do some more stuff here like calling app.factory()...
    return app;
 });
require(['angular', 'app', 'controllers'], function(angular, app) {
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
	    $routeProvider.
	      when('/', {controller:'LockController', templateUrl:'html/lockscreen.html'}).
	      when('/home', {controller:'HomeController', templateUrl:'html/home.html'}).
	      when('/:eventLabel/:eventId', {controller:'DetailController', templateUrl:'html/detail.html'}).
	      when('/sms', {controller:'Controller', templateUrl:'html/smslist.html'}).
	      when('/smsread', {controller:'Controller', templateUrl:'html/sms.html'}).
	      when('/maps', {controller:'MapController', templateUrl:'html/maps.html'}).
	      otherwise({redirectTo:'/'});
	}]);
});
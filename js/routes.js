require(['angular', 'app', 'controllers'], function(angular, app) {
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
	    $routeProvider.
	      when('/', {controller:'HomeController', templateUrl:'html/home.html'}).
	      when('/:eventLabel/:eventId', {controller:'DetailController', templateUrl:'html/detail.html'}).
	      when('/sms', {controller:'SmsController', templateUrl:'html/sms.html'}).
	      when('/c', {controller:'CalendarController', templateUrl:'html/calendar.html'}).
	      otherwise({redirectTo:'/'});
	}]);
});
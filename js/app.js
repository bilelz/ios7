define("app", ["angular", "angularresource", "angularroute", "angularanimate"], function(angular) {
    var app = angular.module("ios", ["ngResource", "ngRoute", "ngAnimate", "calendarFilters"] );
    // you can do some more stuff here like calling app.factory()...
    return app;
 });
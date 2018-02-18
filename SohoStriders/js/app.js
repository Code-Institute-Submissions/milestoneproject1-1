angular.module('SohoStriders', ['ngRoute', 'RouteControllers']);
 
angular.module('SohoStriders').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/training', {
        templateUrl: 'templates/training.html',
        controller: 'TrainingController'
    })
    .when('/racing', {
        templateUrl: 'templates/racing.html',
        controller: 'RacingController'
    })
    .when('/schedule', {
    	templateUrl: 'templates/schedule.html',
	controller: 'ScheduleController'
    })
    .when('/support', {
        templateUrl: 'templates/support.html',
        controller: 'SupportController'
    });
});

angular.module('SohoStriders', ['ngRoute', 'RouteControllers', 'angular-storage']);
 
angular.module('SohoStriders').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('milestoneproject1/training', {
        templateUrl: 'templates/training.html',
        controller: 'TrainingController'
    })
    .when('milestoneproject1/racing', {
        templateUrl: 'templates/racing.html',
        controller: 'RacingController'
    })
    .when('milestoneproject1/schedule', {
    	templateUrl: 'templates/schedule.html',
	controller: 'ScheduleController'
    })
    .when('milestoneproject1/support', {
        templateUrl: 'templates/support.html',
        controller: 'SupportController'
    });
});

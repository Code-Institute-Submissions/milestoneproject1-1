angular.module('SohoStriders', ['ngRoute', 'RouteControllers', 'angular-storage']);
 
angular.module('SohoStriders').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  
 
    $routeProvider.when('/milestoneproject1/', {
        templateUrl: '/milestoneproject1/templates/home.html',
        controller: 'HomeController'
    })
    .when('/milestoneproject1/training', {
        templateUrl: '/milestoneproject1/templates/training.html',
        controller: 'TrainingController'
    })
    .when('/milestoneproject1/racing', {
        templateUrl: '/milestoneproject1/templates/racing.html',
        controller: 'RacingController'
    })
    .when('/milestoneproject1/schedule', {
    	templateUrl: '/milestoneproject1/templates/schedule.html',
	controller: 'ScheduleController'
    })
    .when('/milestoneproject1/support', {
        templateUrl: '/milestoneproject1/templates/support.html',
        controller: 'SupportController'
    });
});

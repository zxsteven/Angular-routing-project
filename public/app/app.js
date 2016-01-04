var app = angular.module('app', ['ngRoute'])

.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {
  $logProvider.debugEnabled(true);
  
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: '/public/app/templates/home.html'
  })
    .when('/schools', {
      controller: 'AllSchoolsController',
      controllerAs: 'schools',
      templateUrl: '/public/app/templates/allSchools.html'
  })
    .when('/classrooms', {
      controller: 'AllClassroomsController',
      controllerAs: 'classrooms',
      templateUrl: '/public/app/templates/allClassrooms.html'
  })
    .when('/activities', {
      controller: 'AllActivitiesController',
      controllerAs: 'activities',
      templateUrl: '/public/app/templates/allActivities.html'
  })
  .otherwise('/');
}]);
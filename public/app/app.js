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
    .when('/classrooms/:id', {
      controller: 'ClassroomController',
      controllerAs: 'classroom',
      templateUrl: '/public/app/templates/classroom.html'
  })
    .when('/classrooms/:id/detail/:month?', {
      controller: 'ClassroomController',
      controllerAs: 'classroom',
      templateUrl: '/public/app/templates/classroomDetail.html'
  })
  .otherwise('/');
}])

.run(['$rootscope', '$log', function($rootscope, $log){
  $rootscope.$on('$routeChangeSuccess', function(event, current, previous){
    $log.debug('successfully changed routes');
    
    $log.debug(event);
    $log.debug(current);
    $log.debug(previous);
  });
  
  $rootscope.$on('$routeChangeError', function(event, current, previous, rejection){
    $log.debug('error changing routes');
    
    $log.debug(event);
    $log.debug(current);
    $log.debug(previous);
    $log.debug(rejection)
  });
  
}])
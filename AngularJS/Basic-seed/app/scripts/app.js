'use strict';

angular
  .module('basicSeedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'MainCtrl'
      })
      .when('/filter', {
        templateUrl: 'views/filter.html',
        controller: 'MainCtrl'
      })
      .when('/directive', {
        templateUrl: 'views/directive.html',
        controller: 'MainCtrl'
      })
      .when('/directiveLazyLoading', {
        templateUrl: 'views/directiveLazyLoading.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

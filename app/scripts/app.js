'use strict';

/**
 * @ngdoc overview
 * @name yoslApp
 * @description
 * # yoslApp
 *
 * Main module of the application.
 */
angular
  .module('yoslApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResource'

  ])
  .config(function ($routeProvider) {
 
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })     
      .when('/home', {
        templateUrl: 'views/home.html',
      })
      .when('/addlink', {
        templateUrl: 'views/addlink.html',
        controller: 'AddlinkCtrl'
      })      
      .when('/test', {
        templateUrl: 'views/test.html',
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

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
    'ngResource',
    'ui.router'

  ])
  .config(function ($locationProvider,$stateProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home',{
          url:"/",
          templateUrl:'views/home.html',
          controller:'HomeCtrl'
        })        
        .state('test',{
          url:"/test",
          templateUrl:'views/test.html',
          controller:'HomeCtrl'
        })        
        .state('addlink',{
          url:"/addlink",
          templateUrl:'views/addlink.html',
          controller:'AddlinkCtrl'
        })
  });

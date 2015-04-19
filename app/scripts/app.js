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
        'ngSanitize',
        'ngTouch',
        'ngResource',
        'ui.router',

    ])
    .config(function($locationProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('home', {
                url: '',
                views: {
                    '': {
                        templateUrl: 'views/home.html',
                        controller: 'HomeCtrl'
                    },
                    'filters@home': {
                        templateUrl: 'views/filters.html',
                        controller: 'FiltersCtrl'
                    },
                }
            })

        .state('addlink', {
            url: 'addlink',
            templateUrl: 'views/addlink.html',
            controller: 'AddlinkCtrl',
        })

        .state('otherwhise', {
            url: 'home'
        });
    })

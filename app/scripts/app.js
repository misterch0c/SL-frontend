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
        'mgcrea.ngStrap'

    ])
    .config(function($locationProvider, $stateProvider, $urlRouterProvider, $popoverProvider) {


        $stateProvider
            .state('home', {
                url: 'home',
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
        });

        angular.extend($popoverProvider.defaults, {
            placement: "bottom",
        });

    })
    .run(['$state',
        function($state) {
            $state.transitionTo('home');
        }
    ]);

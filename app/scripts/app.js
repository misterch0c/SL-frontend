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

        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'mgcrea.ngStrap',
        'wu.masonry'

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
        })
        .state('irc',{
            url:'irc',
            templateUrl:'views/irc.html',

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

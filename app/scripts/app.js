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
        'environment',
        'wu.masonry',
        'ngDialog',
        'infinite-scroll',

    ])
    .config(function($locationProvider, $stateProvider, $urlRouterProvider, $popoverProvider, envServiceProvider, ngDialogProvider) {
      $urlRouterProvider.otherwise("/home");

      $locationProvider.hashPrefix('!');
    envServiceProvider.config({
            domains: {
                development: ['localhost:1337', 'dev.local'],
                production: ['acme.com', 'acme.net', 'acme.org']
            },
            vars: {
                development: {
                    apiUrl: 'http://localhost:1337/',
                },
                production: {
                    apiUrl: 'http://46.101.184.217:1337/',
                    raw:'http://46.101.184.217/',
                },
            }
        });
        envServiceProvider.set('production');
        $stateProvider
            .state('home', {
                url: '/home',
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
            url: '/addlink',
            templateUrl: 'views/addlink.html',
            controller: 'AddlinkCtrl',
        })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
            })
            .state('graveyard', {
                url: '/graveyard',
                templateUrl: 'views/graveyard.html',
                //controller: 'Gr',
            })
             .state('tools', {
                url: '/tools',
                templateUrl: 'views/graveyard.html',
                //controller: 'Gr',
            })
            .state('blogs', {
                url: '/blogs',
                views: {
                    '': {
                        templateUrl: 'views/blogs.html',
                        controller: 'HomeCtrl'

                    },
                    'filters@blogs': {
                        templateUrl: 'views/filters.html',
                        controller: 'FiltersCtrl'
                    },
                }
            })
            .state('irc', {
                url: '/irc',
                templateUrl: 'views/irc.html',
                controller: "IrcCtrl",

            })
            .state('challenges', {
                url: '/challenges',
                templateUrl: 'views/challenges.html',
                controller: "ChallCtrl"
            });

        angular.extend($popoverProvider.defaults, {
            placement: "bottom",
        });

    })

.run(['$state',
    function($state) {
        $state.transitionTo('home');
    }
]


);

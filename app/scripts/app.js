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
        'wu.masonry'



    ])
    .config(function($locationProvider, $stateProvider, $urlRouterProvider, $popoverProvider,envServiceProvider) {

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
                      }
                  }
              });
        envServiceProvider.set('development');
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
        .state('masonry', {
            url: 'masonry',
            templateUrl: 'views/masonry.html',
            controller: 'MasonCtrl'

        })
        .state('irc',{
            url:'irc',
            templateUrl:'views/irc.html',

        })
        .state('challenges',{
          url:'challenges',
          templateUrl:'views/challenges.html',
          controller:"ChallCtrl"
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

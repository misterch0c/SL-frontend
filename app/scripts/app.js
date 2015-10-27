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
        'environment'


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
                          staticUrl: '//localhost:1337'
                          // antoherCustomVar: 'lorem',
                          // antoherCustomVar: 'ipsum'
                      },
                      production: {
                          apiUrl: '//api.acme.com/v2',
                          staticUrl: '//static.acme.com'
                          // antoherCustomVar: 'lorem',
                          // antoherCustomVar: 'ipsum'
                      }
                      // anotherStage: {
                      //  customVar: 'lorem',
                      //  customVar: 'ipsum'
                      // }
                  }
              });
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

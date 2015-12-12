'use strict';

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

    .factory('linksGrabber', function($rootScope, $http){
       
        /*
        var linksAreDownloaded = function(){
            return $rootScope.ircs && $rootScope.rawLinks && $rootScope.rawBlogs;
        };
        */
        return function(){
            if (!$rootScope.ircs) {
                //$rootScope.ircs = [];
                $http.get($rootScope.environment + 'link/get?type=irc&sort=channel').then(function(res) {
                    $rootScope.ircs = res.data;
                    //console.log($rootScope.ircs);
                });
            }

            if (!$rootScope.rawLinks) {
                $rootScope.links = [];
                $http.get($rootScope.environment + 'link?type=Board&limit=0&sort=title').then(function(res) {
                  $rootScope.rawLinks = res.data;
                  //$rootScope.links = $rootScope.rawLinks.slice(0, 10);
                });
            }

            if (!$rootScope.rawBlogs) {
                $rootScope.rawBlogs = [];
                $http.get($rootScope.environment + 'link?type=Blog&limit=0&sort=title').then(function(res) {
                    $rootScope.rawBlogs = res.data;
                    //$rootScope.blogs = $rootScope.rawBlogs.slice(0, 10);
                });
            }                
        }


    })

    .factory('getNextLinks', function($rootScope, $http){
        $rootScope.isBusy = false;

        return function(links, type){
            //console.log(links);

            if ($rootScope.isBusy || !links) return;
            $rootScope.isBusy = true;

            var where = {};
            where.type = type;

            if ($rootScope.hideDownLinks){
                where.isup = true;
            }
            if ($rootScope.showPrivate){
                where.private = true;
            }
            if ($rootScope.lang != ""){
                where.lang = $rootScope.lang;
            }

            var query = $rootScope.environment + 
                'link' +
                '?skip=' + $rootScope.skip + 
                '&limit=' + $rootScope.limit + 
                '&sort=' + $rootScope.sortBy;
            if (where)
                query += '&where=' + JSON.stringify(where);
            
            //console.log(query);

            $http.get(query).then(function(res) {

                for (var i = 0; i < res.data.length; i++){
                    links.push(res.data[i]);
                }
                //console.log(links);
                //20 more links at each scrolling
                $rootScope.skip += 20;
                $rootScope.isBusy = false;


            }, function(err){
                $rootScope.isBusy = false;
            });

        }

    })

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
                    apiUrl: 'https://www.security-base.com:1337/',
                    raw:'https://www.security-base.com/',
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
            })
             .state('tools', {
                url: '/tools',
                templateUrl: 'views/graveyard.html',
            })
            .state('blogs', {
                url: '/blogs',
                views: {
                    '': {
                        templateUrl: 'views/blogs.html',
                        controller: 'BlogsCtrl'

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

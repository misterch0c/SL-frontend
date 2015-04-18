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
        'eehNavigation',
        'ui.bootstrap'

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
    .config(['eehNavigationProvider',
        function(eehNavigationProvider) {
            // Configure navbar branding and the link to navigate to when clicked.
            eehNavigationProvider.navbarBrand = {
                text: 'My Product',
                href: '/home'
            };

            // Add a drowndown menu for user links to the navbar.
            eehNavigationProvider
                .navbarMenuItem('user', {
                    text: 'Me',
                    iconClass: 'i.flag.gi'
                })
                .navbarMenuItem('user.profile', {
                    text: 'User Profile',
                    iconClass: 'fa-user',
                    href: '/user-profile'
                });

            // Add a menu item for /home to the sidebar.
            eehNavigationProvider
                .sidebarMenuItem('boards', {
                    text: 'Boards',
                    state: 'home',
                    src:'http://fc00.deviantart.net/fs71/f/2013/216/2/9/us_flag_icon_sugarislife28_by_sugarislife28-d6gnlqi.gif'
                })
                .sidebarMenuItem('challenges', {
                    text: 'Challenges',
                    iconClass: 'fa-diamond fa-2x',
                    href: '/home'
                })
                .sidebarMenuItem('ircs', {
                    text: 'IRCs',
                    iconClass: 'fa-weixin',
                    href: '/home'
                })
                .sidebarMenuItem('flag', {
                    text: 'VPNs',
                    iconClass: 'fa-server',
                    href: '/home'
                })
            // POUR IMBRIQUER DES ELEMENTS

            .sidebarMenuItem('tools', {
                text: 'Tools',
                iconClass: 'fa-cog',
                href: '/home'
            })
                .sidebarMenuItem('addlink', {
                    text: 'add link',
                    iconClass: 'fa-plus',
                    state: 'addlink'
                })
                .sidebarMenuItem('contact', {
                    text: 'Contact/About',
                    iconClass: 'fa-user',
                    href: '/home'
                })
                .sidebarMenuItem('lang', {
                    text: 'Languages',
                    isCollapsed: true,
                    iconClass: 'fa-flag'
                })
            // sous elements
            .sidebarMenuItem('lang.us', {
                text: 'English',
                iconClass: 'fa-comments',
                href: '/home'
            })
                .sidebarMenuItem('lang.fr', {
                    text: 'French',
                    iconClass: 'fa-comments',
                    href: '/home'
                })
                .sidebarMenuItem('lang.ru', {
                    text: 'Russian',
                    iconClass: 'fa-comments',
                    href: '/home'
                });
        }
    ]);
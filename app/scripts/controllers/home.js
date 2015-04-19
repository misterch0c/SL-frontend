'use strict';

var app = angular.module('yoslApp');

app.factory('Links', function($resource) {
    return $resource('http://localhost:1337/link', null, {
        'whereLang': {
            method: 'GET',
            params: {
                lang: '@lang'
            },
            isArray: true
        },
        'whereType': {
            method: 'GET',
            params: {
                type: '@type'
            },
            isArray: true
        },
        'where': {
            method: 'GET',
            params: {
                lang: '@lang',
                type: '@type'
            },
            isArray: true
        }
    });
});



app.directive('bsPopover', function() {
    return function(scope, element, attrs) {
        element.find("a[rel=popover]").popover({
            placement: 'auto',
            html: 'true',
            trigger: 'focus hover'
        });
    };
});



app.controller('HomeCtrl', function($scope, Links) {
console.log('home ctrl');


    $('[data-toggle="popover"]').popover()


    //Get links by lang (us)
    // $scope.links = Links.query();
    $scope.links = [
        {
            link:"google.com",
            title:"Zenk-Security",
            description:"Zenk Security est une communauté de hacking et de sécurité informatique francophone basé sur le partage et l'apprentissage."
        },
        {
            link:"google.com",
            title:"222222222222",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"333333333333333333333333",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine"
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine"
        }
    ];

    $scope.photos = [
    {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"}
];
    
    //Get links by type (board)
    //$scope.links = Links.whereType({type:'board'});

    //Get links by lang and by type
    //$scope.links = Links.where({lang:'us', type:'board'});


});
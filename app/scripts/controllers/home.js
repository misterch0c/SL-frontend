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


    $(document).ready(function() {
    $('[data-toggle="popover"]').popover();
      $('[data-toggle="tooltip"]').tooltip()
    });

    //Get links by lang (us)
    // $scope.links = Links.query();
    $scope.links = [
        {
            link:"google.com",
            title:"Zenk-Security",
            description:"Zenk Security est une communauté de hacking et de sécurité informatique francophone basé sur le partage et l'apprentissage.",
            lang: "fr",
            rank: 1,
            deltaRank: 0
        },
        {
            link:"google.com",
            title:"222222222222",
            description:"Search Engine",
            lang: "fr",
            rank: 10,
            deltaRank: +2
        },
        {
            link:"google.com",
            title:"333333333333333333333333",
            description:"Search Engine",
            lang: "fr",
            rank: 7,
            deltaRank: -1
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine",
            lang: "us",
            rank: 6,
            deltaRank: +1
        }
    ];

    //Get links by type (board)
    //$scope.links = Links.whereType({type:'board'});

    //Get links by lang and by type
    //$scope.links = Links.where({lang:'us', type:'board'});


});
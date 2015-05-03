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




app.controller('HomeCtrl', function($scope, Links) {
    console.log('home ctrl');


    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
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
            deltaRank: 0,
            isup:true,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"google.com",
            title:"222222222222",
            description:"Search Engine",
            lang: "fr",
            rank: 10,
            deltaRank: +2,
                        isup:false,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"google.com",
            title:"3333333333333",
            description:"Search Engine",
            lang: "fr",
            rank: 7,
            deltaRank: -1,
                        isup:true,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"google.com",
            title:"Google",
            description:"Search Engine",
            lang: "us",
            rank: 6,
            deltaRank: +1,
                        isup:true,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"godfogle.com",
            title:"dfd",
            description:"kjhk Engine",
            lang: "us",
            rank: 6,
            deltaRank: +1,
                        isup:false,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"sdqsd.com",
            title:"qsdqsd",
            description:"qsd SDqsd ",
            lang: "es",
            rank: 6,
            deltaRank: +1,
                        isup:false,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        },
        {
            link:"sdfdsf.com",
            title:"dsf f hacking",
            description:"sdfg  kiug",
            lang: "es",
            rank: 6,
            deltaRank: +1,
                        isup:true,
            tags : ["tag1", "tag2", "tag3", "exampleTag"]
        }
    ];

    $scope.languages = ['fr','us','es'];
    $scope.fullLanguageName = function(name){
        switch(name){
            case('us'):
                return 'English';
            case('fr'):
                return 'French';
            case('es'):
                return 'Spanish';
        }
    };

    //Get links by type (board)
    //$scope.links = Links.whereType({type:'board'});

    //Get links by lang and by type
    //$scope.links = Links.where({lang:'us', type:'board'});


});
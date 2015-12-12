'use strict';

var app = angular.module('yoslApp');

/*
app.factory('Links', function($resource, envService) {

    var environment = envService.read('apiUrl');
    return $resource(environment + 'link/get', null, {
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
*/

//  constructor function to encapsulate HTTP and pagination logic
// app.factory('Base', function($http) {
//     var base = function() {
//         this.items = [];
//         this.busy = false;
//         this.after = '';
//     };

//     Base.prototype.nextPage = function() {
//         if (this.busy) return;
//         this.busy = true;
//         // console.log("factooor");
//         // console.log(this.after);
//         var url = "http://localhost:1337/link?limit=" + this.after;
//         $http.jsonp(url).success(function(data) {
//             var items = data.data.children;
//             for (var i = 0; i < items.length; i++) {
//                 this.items.push(items[i].data);
//             }
//             this.busy = false;
//         }.bind(this));
//     };

//     return Base;
// });



app.controller('HomeCtrl', function($scope, $rootScope) {

    $rootScope.resetFilters();

    $rootScope.links = [];
    $rootScope.type = 'Board';
    $rootScope.nextLinks($rootScope.links, $rootScope.type);

    $scope.addTag = function(tag) {
        if ($('[data-role="tagsinput"]').tagsinput('items').indexOf(tag) == -1) {
            $('[data-role="tagsinput"]').tagsinput('add', tag);
        } else {
            $('[data-role="tagsinput"]').tagsinput('remove', tag);
        }
    };

    //Get links by type (board)
    //$scope.links = Links.whereType({type:'board'});

    //Get links by lang and by type
    //$scope.links = Links.where({lang:'us', type:'board'});



});
'use strict';


angular.module('yoslApp')
  .controller('AddlinkCtrl', function($scope, $resource, $http, envService, ngDialog) {
    console.log("addlink controler");
    //console.log($scope.title);
    var environment = envService.read('apiUrl');
    $scope.test = function() {
      $resource(environment + 'link', {}, {}).query(function(data) {});
    };

    //Get returns an object, query returns an array
    $scope.addLink = function(t, desc) {
      ngDialog.open({
        template: '<p>Thank you, your submission will be reviewed.</p>',
        plain: true
      });
      // console.log("addlinks");
      // console.log(desc);
      // console.log($scope.description);

      $scope.description = desc;

      $resource(environment + 'link/create', {
          link: $scope.link,
          title: $scope.title,
          description: $scope.description,
          type: $scope.type,
          lang: $scope.lang
        }, {
          'create': {
            method: 'POST',
            isArray: false
          }
        })
        .get(function(data) {
          // console.log($scope.title);


        });
    };

    $scope.getDescription = function(link) {

      $http.post(environment + 'link/getDesc/', {
          link: link
        })
        .success(function(data) {
          // console.log("get descr " + data);
          $scope.description = data;
        });

    };
    $scope.getTitle = function(link) {
      console.log(link);
      $http.post(environment + 'link/getTitle/', {
          link: link
        })
        .success(function(data) {
          // console.log("get title" + data);
          $scope.title = data;
        });

    };








  });

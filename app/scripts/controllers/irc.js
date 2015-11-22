'use strict';

angular.module('yoslApp')
  .controller('IrcCtrl', function($scope, $resource, $http, envService) {
    var environment = envService.read('apiUrl');

    $scope.getChan = function() {
      $http.get(environment + 'link/get?type=irc&sort=channel').success(function(data) {
        $scope.ircs = data;
        console.log(data);

      });

    };
    $scope.getChan();
    $scope.servs = {
      "Freenode": {
        adr: "irc.freenode.net",
        port: "6697",
        name: "Freenode"
      },
      "Rizon": {
        adr: "irc.rizon.net",
        port: "6697",
        name: "Rizon"
      },
      "Hackerzvoice":{
        adr:"irc.hackerzvoice.net",
        port:"6697",
        name: "Hackerzvoice"
      },
      "MalwareTech":{
        adr:"",
        port: "6697",
        name: "MalwareTech"
      },
      "I2P":{
        adr:"127.0.0.1",
        port:"6668",
        name: "I2P"
      }
    };


    $scope.isLink = function(str) {
        return validator.isURL(str);

    }

  });

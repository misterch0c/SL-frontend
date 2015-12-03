'use strict';

var app = angular.module('yoslApp');

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

// Reddit constructor function to encapsulate HTTP and pagination logic
app.factory('Base', function($http) {
  var base = function() {
    this.items = [];
    this.busy = false;
    this.after = '';
  };

  Base.prototype.nextPage = function() {
    console.log('lll');
    if (this.busy) return;
    this.busy = true;
    console.log("factooor");
    console.log(this.after);
    var url = "http://localhost:1337/link?limit=" + this.after;
    $http.jsonp(url).success(function(data) {
      var items = data.data.children;
      for (var i = 0; i < items.length; i++) {
        this.items.push(items[i].data);
      }
      this.busy = false;
    }.bind(this));
  };

  return Base;
});



app.controller('HomeCtrl', function($scope, $rootScope, Links, $http, envService, $sanitize) {
  var environment = envService.read('apiUrl');
  $scope.env = envService.read('raw');
  //console.log('home ctrl');
  $scope.lim = 20;
  $scope.ski = 0;
  $rootScope.servs = {
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
    "Hackerzvoice": {
      adr: "irc.hackerzvoice.net",
      port: "6697",
      name: "Hackerzvoice"
    },
    "MalwareTech": {
      adr: "",
      port: "6697",
      name: "MalwareTech"
    },
    "I2P": {
      adr: "127.0.0.1",
      port: "6668",
      name: "I2P"
    }
  };

  $http.get(environment + 'link/get?type=irc&sort=channel').success(function(data) {
    $rootScope.ircs = data;
    $scope.status = 'ready';

    console.log(data);
  });

  $scope.offset = 0;
  $scope.posts = [];
  $scope.isBusy = false;

  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $http.get(environment + 'link?type=Board&limit=0').success(function(data) {
    console.log("gorow");
    $rootScope.rawLinks = data;
    $scope.status = 'ready';

  });



  $http.get(environment + 'link?limit=10')
    .success(function(data) {
      //console.log("get blogs " + data);
      // $scope.links = data;
    });
  //Get links by lang (us)
  // $scope.links = Links.query({
  //     type: "Board",
  // });


  $http.get(environment + 'link?type=Blog&limit=0')
    .success(function(data) {
      $rootScope.blogs = data;
      $scope.status = 'ready';

    });


  $scope.limited = function(type) {
    if ($scope.isBusy === true) return;
    $scope.isBusy = true;
    console.log('triggered');
    console.log($scope.ski);
    $http.get(environment + 'link?type=' + type + '&limit=' + $scope.lim + '&skip=' + $scope.ski + "&sort=title")
      .success(function(data) {
        console.log(data);
        //console.log("get blogs " + data);
        // console.log('skip= ' + $scope.ski);
        // console.log(data.length);
        // console.log(data[0]);

        if ($scope.ski != 0) {
          for (var i = 0; i < data.length; i++) {
            if (type == "Board") {
              $scope.links.push(data[i]);
            } else {
              $scope.blogs.push(data[i]);
            }


          }
          $scope.isBusy = false;
        } else {
          $scope.links = data;
          $scope.isBusy = false;
        }
        $scope.ski = $scope.ski + 20;
      });



  }


  //That's ugly but urhdurh
  $scope.languages = ['es', 'fr', 'de', 'us', 'ru', 'ro', 'tr', 'ir', 'pl', 'az', 'cn', 'vn', 'ae'];
  $scope.languagesBlogs = ['us', 'fr', 'jp'];
  $scope.fullLanguageName = function(name) {
      switch (name) {
        case ('us'):
          return 'English';
        case ('fr'):
          return 'French';
        case ('es'):
          return 'Spanish';
        case ('ca'):
          return 'Chinese';
        case ('ru'):
          return 'Russian';
        case ('de'):
          return 'German';
        case ('ba'):
          return 'Bosnian';
        case ('az'):
          return 'Azerbaijan';
        case ('pl'):
          return 'Polish';
        case ('ir'):
          return 'Persian';
        case ('vn'):
          return 'Vietnamese';
        case ('tr'):
          return 'Turkish';
        case ('th'):
          return 'Thai';
        case ('id'):
          return 'Indonesia';
        case ('it'):
          return 'Italian';
        case ('pr'):
          return 'Portuguese';
        case ('ro'):
          return 'Romanian';
        case ('ir'):
          return 'Persian';
        case ('az'):
          return 'Azerbaijan';
        case ('ae'):
          return 'Arabic';
        case ('jp'):
          return 'Japanse';


      }
    }
    //lost fulllangfunc, get from got ... -_-

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

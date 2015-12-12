'use strict';


angular.module('yoslApp')

  .controller('MainCtrl', function ($scope, $rootScope, linksGrabber, envService, getNextLinks) {

  	$rootScope.nextLinks = function(links, type){
  		getNextLinks(links, type);
  	}

    $rootScope.environment = envService.read('apiUrl');

    //Grabs all the links if not already grabbed
    linksGrabber();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.languages = [
        {
            key: "ae",
            value: "Arabic"
        },
        {
            key: "az",
            value: "Azerbaijan"
        },
        {
            key: "cn",
            value: "Chine"
        },
        {
            key: "us",
            value: "English"
        },
        {
            key: "fr",
            value: "French"
        },
        {
            key: "de",
            value: "German"
        },
        {
            key: "ir",
            value: "Persian"
        },
        {
            key: "pl",
            value: "Polish"
        },
        {
            key: "ro",
            value: "Romanian"
        },
        {
            key: "ru",
            value: "Russian"
        },
        {
            key: "es",
            value: "Spanish"
        },
        {
            key: "tr",
            value: "Turkish"
        },
        {
            key: "vn",
            value: "Vietnamese"
        },
    ];

      $rootScope.languagesBlogs = [
        {
            key: "us",
            value: "English"
        },
        {
            key: "fr",
            value: "French"
        },
        {
            key: "jp",
            value: "Japan"
        },
    ];

    /*
    //That's ugly but urhdurh
    $rootScope.languages = ['es', 'fr', 'de', 'us', 'ru', 'ro', 'tr', 'ir', 'pl', 'az', 'cn', 'vn', 'ae'];
    $rootScope.languagesBlogs = ['us', 'fr', 'jp'];
    */
    /*
    $rootScope.fullLanguageName = function(name) {
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
    */
    $scope.servs = {
      'Freenode': {
        adr: 'irc.freenode.net',
        port: '6697',
        name: 'Freenode'
      },
      'Rizon': {
        adr: 'irc.rizon.net',
        port: '6697',
        name: 'Rizon'
      },
      'Hackerzvoice':{
        adr:'irc.hackerzvoice.net',
        port:'6697',
        name: 'Hackerzvoice'
      },
      'MalwareTech':{
        adr:'irc.malwaretech.com',
        port: '6697',
        name: 'MalwareTech'
      },
      'I2P':{
        adr:'127.0.0.1',
        port:'6668',
        name: 'I2P'
      }
    };

  });

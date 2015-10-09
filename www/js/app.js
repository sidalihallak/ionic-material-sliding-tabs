// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','tabSlideBox','ionicRipple'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout',
    function($q, $http, $rootScope, $location, $window, $timeout){

      $rootScope.$on("$locationChangeStart", function(event, next, current){
        $rootScope.error = null;
        console.log("Route change!!!", $location.path());
        var path = $location.path();


        console.log("App Loaded!!!");
      });
    }
  ])
  .controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout',
    function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
      $scope.onSlideMove = function(data){
        console.log("You have selected " + data.index + " tab");
      };
    }
  ])

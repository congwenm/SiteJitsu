'use strict';
/** Util
 */
(function(window){
  var ut = {};
  var colorlog = function(text, color){
    console.log('%c'+text, 'color: ' + color);
  }
  this.greenlog = function(text){
    colorlog(text, 'green');
  }
  this.redlog = function(text){
    colorlog(text, 'red');
  }
  this.brownlog = function(text){
    colorlog(text, 'brown');
  }
  this.ut = ut;

  //angularize
  this.$root = undefined;
}).call(window)




/** App
 */
var app = angular.module('WebStoreApp', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })


      .otherwise({
        redirectTo: '/'
      })

      ;
  })
  .run(function($rootScope, $window){
    $root = $rootScope;

    $rootScope.digest = function(){
      if(this.$$phase == null){
        this.$digest();
        // greenlog('current phase', this.$$phase);
      } 
      // else{
      //   redlog('current phase', this.$$phase);
      // }
    }
    $root.$watch('$$phase', function(phase){
      greenlog('phase change: ' + phase)
    })

    $rootScope.onAction = function(func){
      $(window).on('click', function(){
        func();
        $rootScope.digest();
        $(window).off('click');
      });
    }

    $rootScope.Status = {
      loggedIn: false,
      Profile: {
        email: '',
        password: '',
        username: '',
        firstname: ''
      },
      reset: function(){
        // console.log(this); //works
        this.loggedIn = false;
        this.Profile.username = '';
        this.Profile.firstname = '';
      }
    }
  })
  ;

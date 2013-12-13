'use strict';

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
  .run(function($rootScope){
    $rootScope.Status = {
      LoggedIn: false,
      Profile: {
        email: '',
        password: '',
        username: '',
        firstname: ''
      }
    }
  })
  ;

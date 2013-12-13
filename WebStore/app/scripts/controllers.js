'use strict';

// angular.module('WebStoreApp')
  app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


app.controller('HomeCtrl', function($scope){



})

.controller('LoginCtrl', function($scope, $rootScope, LoginService){
	
	$scope.login = function(e){
		console.log($scope);
		$scope.loginForm.submitten = true;
		e.stopPropagation();
		
		$(window).click(function(){
			$rootScope.$apply(function(){
				$scope.loginForm.submitten = false;
			})
		})
	

		//login on valid form
		if($scope.loginForm.$valid = true){
			LoginService.get({
				'user_email': $scope.loginForm.email.$viewValue,
				'user_password': $scope.loginForm.password.$viewValue
			}, function(response){
				console.log('logged in??', response);
				$rootScope.LoginResponse = response;


			})// send in username and password
		}
		else{
			//do not log in
			if ($scope.loginForm.email.$invalid){
				$scope.loginMsg = "Please Check your email";
			}
			else if ($scope.loginForm.password.$invalid){
				$scope.loginMsg = "Please Check your password";
			}
		}
	}
})
'use strict';

// angular.module('WebStoreApp')
  app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


app.controller('HomeCtrl', function($scope, $rootScope, Product){
	$rootScope.items = Product.query();
	$scope.checkItems = function(){
		console.log($rootScope.items);
	}


})

.controller('LoginCtrl', function($scope, $rootScope, LoginService){
	
	$scope.login = function(e){
		console.log($scope);
		$scope.loginForm.submitten = true;
		// e.stopPropagation();
		

		$rootScope.onAction(function(){		
			$scope.loginForm.submitten = false;	
		})
		$scope.loginForm.$valid = true;
		

		//login on valid form
		if($scope.loginForm.$valid == true){
			LoginService.get({
				'user_email': $scope.loginForm.email.$viewValue,
				'user_password': $scope.loginForm.password.$viewValue
			}, function(response){
				console.log('logged in??', response);
				$rootScope.LoginResponse = response;
				$rootScope.Status.Profile.firstname = response.MockLoginResponse.firstname;
				$rootScope.Status.loggedIn = true;
			})// send in username and password
		}
		else{
			//do not log in
			greenlog('checking which input field has an error');
			if ($scope.loginForm.email.$invalid){
				$scope.loginMsg = "Please Check your email";
			}
			else if ($scope.loginForm.password.$invalid){
				$scope.loginMsg = "Please Check your password";
			}
		}
	}
	$scope.logout = function(){
		$rootScope.Status.reset();
	}
})
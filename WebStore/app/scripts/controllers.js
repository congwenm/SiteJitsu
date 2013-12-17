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
	$rootScope.items = mock.items;
	$scope.getItems = function(){
		console.log('items', $rootScope.items);
	}

	$scope.checkItems = function(){
		$scope.getItems();
	}
})

.controller('LoginCtrl', function($scope, $rootScope, LoginService){
	
	$scope.login = function(e){
		console.log($scope);
		
		// e.stopPropagation();
		
		$rootScope.onAction(function(){		
			$scope.loginForm.submitten = false;	
		})
		$scope.loginForm.submitten = true;

		//login on valid form
		$scope.loginForm.$valid = true;

		if($scope.loginForm.$valid == true){
			LoginService.get({
				// 'user_email': $scope.loginForm.email.$viewValue,
				'username': $scope.loginForm.username.$viewValue,
				'user_password': $scope.loginForm.password.$viewValue
			}, function(response){
				console.log('logged in??', response);
				$rootScope.LoginResponse = response;
				if (response.LoginResponse.methodStatus == '0'){
					$rootScope.Status.Profile.firstname = response.LoginResponse.LoginData.firstName;
					$rootScope.Status.loggedIn = true;	
				}
				else{
					$rootScope.Status.loggedIn = false;
					$scope.loginMsg = "Please check your credentials";
				}
				
			})// send in username and password
		}
		else{
			//do not log in
			console.log('checking which input field has an error', $scope);
			// if ($scope.loginForm.email.$invalid){
			// 	$scope.loginMsg = "Please Check the email you've entered email";
			// }
			if($scope.loginForm.username.$invalid){
				$scope.loginMsg = "Please check your username";
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
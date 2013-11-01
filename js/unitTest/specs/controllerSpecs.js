describe('controller', function(){
	var mockLoc, mockTimeout, mockCompile, rootScope, controller;
	var homeCtrl, homeScope;

	beforeEach(function(){
		module('mySite');
		inject(function($injector){
				mockLoc = $injector.get('$location');
				mockTimeout = $injector.get('$timeout');
				mockCompile = $injector.get('$compile');
				rootScope = $injector.get('$rootScope');
				controller = $injector.get('$controller');
		})
		homeScope = rootScope.$new();
	});

	it('should contain a testVar value at "test var home"', function(){
		homeCtrl = controller('homeCtrl', {
			$scope: homeScope,
			$rootScope: rootScope
		})

		expect(homeScope.testVar).toBe('test var home');
	})


})
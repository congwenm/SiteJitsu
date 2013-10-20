describe('mysite application', function(){
	var mockLocation,
			rootScope,
			timeout,
			route;
	beforeEach(function(){
		module('mySite');
		inject(function($injector){
			mockLocation = $injector.get('$location');
			rootScope = $injector.get('$rootScope');
			route = $injector.get('$route');
			timeout = $injector.get('$timeout');
		})
	})

	it('should be initialized', function(){

		// console.log(mockLocation, rootScope, route);
		expect(mockLocation).toBeDefined();
		expect(rootScope).toBeDefined();
		expect(route).toBeDefined();
	})


	describe('active page', function(){
		it('should be initialized to "HOME"', function(){
			expect(rootScope.activePage).toBe('HOME');
		})
	})

	describe('location ', function(){
		it('should change active page', function(){
			expect(rootScope.activePage).toBe('HOME');
			mockLocation.path('/contact');
			// console.log(mockLocation.path())
			timeout(function(){
				expect(rootScope.activePage).toBe('CONTACT')
			}, 0)
		})
	})
})
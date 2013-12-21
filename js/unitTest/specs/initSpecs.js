describe('mysite application', function(){
	var mockLocation, rootScope, timeout, route,
		httpBackend
	;
	beforeEach(function(){
		module('mySite');
		inject(function($injector){
			mockLocation = $injector.get('$location');
			rootScope = $injector.get('$rootScope');
			route = $injector.get('$route');
			timeout = $injector.get('$timeout');
			httpBackend	 = $injector.get('$httpBackend');
		})

		httpBackend.when('GET', './partials/contact.html')
		.respond('<div>Contact Mock Page</div>')
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
			rootScope.$digest();
			expect(rootScope.activePage).toBe('CONTACT')
			// console.log(mockLocation.path())	
		})
	})
})
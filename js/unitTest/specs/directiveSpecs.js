	describe('ngRef', function(){
		var mockLoc, mockTimeout, mockCompile, rootScope;

		beforeEach(function(){
			module('mySite')
			inject(function($injector){
				mockLoc = $injector.get('$location');
				mockTimeout = $injector.get('$timeout');
				mockCompile = $injector.get('$compile');
				rootScope = $injector.get('$rootScope');
			})	
		})

		it('should land on the page of the ngRef attribute on click event', function(){
			var elem = angular.element('<button ng-ref="/contact">Click</button>');
			expect(rootScope.activePage).toBe('HOME');
			mockLoc.path('/home')
			mockCompile(elem)(rootScope.$new())

			// elem.trigger('click');
			console.log(rootScope.activePage);
			mockTimeout.flush();
			expect(mockLoc.path()).toBe('/contact');		
			expect(rootScope.activePage).toBe('CONTACT');		
			
			

			// mockLoc.path('/contact')
			// mockTimeout(function(){
			// 	expect(rootScope.activePage).toBe('CONTACT')	
			// })
		})
	})
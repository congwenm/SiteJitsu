/*describe('shuffleBlocks', function(){
	var mockLoc, mockTimeout, mockCompile, rootScope;

	beforeEach(function(){
		module('mySite');
		inject(function($injector){
				mockLoc = $injector.get('$location');
				mockTimeout = $injector.get('$timeout');
				mockCompile = $injector.get('$compile');
				rootScope = $injector.get('$rootScope');
		})
	});

	it('should shuffle blocks every 5 secs', function(){
		var elem = '<div shuffle-blocks type="1"> <!--Type 1 = cube--> ' + 
                '<div class="shuffle-pane relative">' + 
                    '<div><img ng-src="./assets/img/wemake.jpg"/></div>' +
                '</div>' +
            '</div>'
            , shufflePane = elem.children('.shuffle-pane')
            , contents = shufflePane.children('div')
            , itemCount = contents.length
            , index = 0, sizeRatio = 154
            , initMode = 'down'
        	;
        elem = mockCompile(elem)(rootScope.$new());

        expect(1).toBe(1);
	})
})
*/
describe('shuffleBlocks', function(){
	var mockLoc, mockTimeout, mockCompile, rootScope;

	beforeEach(function(){
		module('mySite');
		inject(function($injector){
				mockLoc = $injector.get('$location');
				mockTimeout = $injector.get('$timeout');
				mockCompile = $injector.get('$compile');
				rootScope = $injector.get('$rootScope');
		})
	});

	it('should shuffle blocks every 5 secs', function(){
		var elem = '<div shuffle-blocks type="1"> <!--Type 1 = cube--> ' + 
                '<div class="shuffle-pane relative">' + 
                    '<div><img ng-src="./assets/img/wemake.jpg"/></div>' +
                '</div>' +
            '</div>'
            , shufflePane = elem.children('.shuffle-pane')
            , contents = shufflePane.children('div')
            , itemCount = contents.length
            , index = 0, sizeRatio = 154
            , initMode = 'down'
        	;
        elem = mockCompile(elem)(rootScope.$new());

        expect(1).toBe(1);
	})
})


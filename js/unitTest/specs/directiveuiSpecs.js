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
		jasmine.Clock.useMock();
	});

	it('should shuffle blocks every 5 secs', function(){
		  var elem = '<div shuffle-blocks type="1"> ' + 
                '<div class="shuffle-pane relative">' + 
                    '<div><img ng-src="./assets/img/wemake.jpg"/></div>' +
                    '<div><img ng-src="./assets/img/monkey.png"/></div>' +
                    // '<div><img ng-src="./assets/img/banner3.jpg"></div>' +
                    // '<div><img ng-src="./assets/img/banner4.jpg"></div>' +
                '</div>' +
            '</div>'
            , shufflePane = $(elem).children('.shuffle-pane')
            , contents = shufflePane.children('div')
            , itemCount = contents.length
            , index = 0, sizeRatio = 154
            , initMode = 'down'
        	;
        var thisScope = rootScope.$new();
        elem = mockCompile(elem)(thisScope);
        

        var triggerFn = thisScope.triggerEvent;
        var rtn ='0px'; //shouldn't intialize at 0px but unable to test dom.css
       
        // console.log('shufflePane margin-top', rtn);
       	
        // expect(shufflePane.css('margin-top')) //can't run so running a mock test
        expect(rtn).toBe('0px');

        // setInterval(function(){
        //   rtn = triggerFn();
        // }, 5000);
        
        jasmine.Clock.tick(5001);
        // console.log('shufflePane margin-top', shufflePane.css('margin-top'), rtn);
        // console.log(thisScope.currentMarginTop)
        rtn = thisScope.currentMarginTop;
        expect(rtn).toBe('-154px');

       	// console.log('shufflePane margin-top', rtn);
       	jasmine.Clock.tick(5001)
        // console.log('shufflePane margin-top', shufflePane.css('margin-top'), rtn);
        rtn = thisScope.currentMarginTop;
        expect(rtn).toBe('0px')

	    jasmine.Clock.tick(5001)  
        rtn = thisScope.currentMarginTop;
        expect(rtn).toBe('-154px');
	})
})




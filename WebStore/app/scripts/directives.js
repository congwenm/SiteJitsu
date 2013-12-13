app.directive('login-ui', function(){
	return {
		restrict: 'A',
		compile: function(sc,el,at){
			return {
				pre: function(sc,el,at){},

				/**
				 *	Link Function
				 */
				post: function(sc,el,at,ct){

				}
			}
		},
		// controller: 'LoginCtrl'
	}
})
app
.directive('loginUi', function(){
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

.directive('ngClean', function($http, $compile){
	return {
		restrict: 'A',
		compile: function(sc,el,at){
			return {
				post: function(sc,el,at,ct){
					$http.get(at.ngClean || '')
					.success(function(html){
						el.append($compile(html)(sc))
					})
				}
			}
		}
	}
})
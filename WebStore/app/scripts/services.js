app.factory('LoginService', function($resource){
	//mock
		return $resource('../../../Php/MyWebSite/user/login/')
		// return $resource('scripts/login.php');
	})

	.factory('Product', function($resource, $q, $timeout){
		// return $resource('./json/items.json',{}, {});
		return {
			getItems: function(){
				return $.getJSON('./json/items.json');
			}
		}
	})
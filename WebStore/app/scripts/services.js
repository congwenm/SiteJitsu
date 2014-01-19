app.factory('LoginService', function($http){
	
		// return $resource('../../../Php/MyWebSite/user/login/', {}, {
		// 	get: {method: 'GET', isArray: true}
		// })
		return {
			get: function(params, callback){
				$http({
					// url: '../../../Php/MyWebSite/user/login/',
					url: 'http://localhost/php/mywebsite/user/login/',
					method: 'GET',
					params: params
				}).then(callback);
			}
		}
	})

	.factory('Product', function($resource, $q, $timeout){
		// return $resource('./json/items.json',{}, {});
		return {
			getItems: function(){
				return $.getJSON('./json/items.json');
			}
		}
	})
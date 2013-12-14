app.factory('LoginService', function($resource){
	//mock
	// return $resource('../../../Php/MyWebSite/Login.php')
	return $resource('scripts/login.php');
})

.factory('Product', function($resource){
	return $resource('json/items.json');
})
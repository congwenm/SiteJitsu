app.factory('LoginService', function($resource){
	//mock
	// return $resource('../../../Php/MyWebSite/Login.php')
	return $resource('Login.php');
});
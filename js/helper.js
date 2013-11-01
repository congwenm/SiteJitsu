angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);


it('should test routeProvider', function() {
  module('phonecat');

  inject(function($route, $location, $rootScope) {

    expect($route.current).toBeUndefined();
    $location.path('/phones/1');
    $rootScope.$digest();

    expect($route.current.templateUrl).toBe('partials/phone-detail.html');
    expect($route.current.controller).toBe(PhoneDetailCtrl);

    $location.path('/otherwise');
    $rootScope.$digest();

    expect($location.path()).toBe('/phones/');
    expect($route.current.templateUrl).toEqual('partials/phone-list.html');
    expect($route.current.controller).toBe(PhoneListCtrl);

  });
}); 
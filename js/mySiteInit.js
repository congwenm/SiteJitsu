
var debo = {},
    deba = [],
    deroot = {};
var app = angular.module('mySite', function(){

});

app.config(function($routeProvider){
    $routeProvider
        .when('/', {redirectTo: '/home'})
        .when('/home',
        {
            routeTitle: 'HOME',
            templateUrl: './partials/home.html',
            controller: 'homeCtrl'
        })
        .when('/aboutUs', {
            routeTitle: 'ABOUT US',
            templateUrl: './partials/aboutUs.html',
            controller: 'aboutUsCtrl'
        })
        .when('/contact', {
            routeTitle: 'CONTACT',
            templateUrl: './partials/contact.html',
            controller: 'contactCtrl'
        })
        .when('/toolbox', {
            routeTitle: 'TOOL BOX',
            templateUrl: './partials/toolbox.html',
            controller: 'toolboxCtrl'
        })
        .when('/demo', {
            routeTitle: 'DEMO',
            templateUrl: './partials/demo.html',
            controller: 'demoCtrl'
        })
        .when('/animation', {
            routeTitle: 'ANIMATION',
            templateUrl: './partials/animation.html',
            controller: 'animationCtrl'
        })
})
app.run(function($rootScope, $location){
    deroot = $rootScope;
    deloc = $location;

    $rootScope.projectCount = config.project.length;

    $rootScope.looper = [1,2,3,4,5,6,7] //8
    $rootScope.activePage = "HOME";


    $rootScope.$on('$routeChangeStart', function(currentPage, nextPage){
//        console.log(currentPage, nextPage);
        $rootScope.activePage = nextPage.$$route.routeTitle;
    })
})


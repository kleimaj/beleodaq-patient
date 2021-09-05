var app = angular.module('BELEODAQ', ['ui.router']);
var offsetHeight, footer;
let menuToggled = false;

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  
    $locationProvider.html5Mode({
      enabled: false,
    });

    $stateProvider
        .state('', {
            url: '/',
            templateUrl: 'landing-page.html'
        });

});
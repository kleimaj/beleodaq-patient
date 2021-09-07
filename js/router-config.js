var app = angular.module('BELEODAQ-Patient', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  
    $locationProvider.html5Mode({
      enabled: false,
    });

    $stateProvider
        .state('LANDING-PAGE', {
            url: '/',
            templateUrl: 'landing-page.html'
        })
        .state('PTCL', {
            url: '/about/ptcl',
            templateUrl: 'content/about/ptcl.html'
        })
        .state('BELEODAQ', {
            url: '/about/beleodaq',
            templateUrl: 'content/about/beleodaq.html'
        })
        .state('WORKS', {
            url: '/about/how-it-works',
            templateUrl: 'content/about/works.html'
        })

});

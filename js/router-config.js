var app = angular.module('BELEODAQ-Patient', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
  
    $locationProvider.html5Mode({
      enabled: false,
    });
    // $uiViewScrollProvider.useAnchorScroll();

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
        .state('DOSING', {
            url: '/taking-beleodaq/dosing-schedule',
            templateUrl: 'content/taking/dosing.html'
        })
        .state('EXPECT', {
          url: '/taking-beleodaq/what-to-expect',
          templateUrl: 'content/taking/expect.html'
        })
        .state('PREPARING', {
          url: '/taking-beleodaq/preparing-for-treatment',
          templateUrl: 'content/taking/preparing.html'
        })
        .state('MONITORING', {
          url: '/taking-beleodaq/monitoring-your-treatment',
          templateUrl: 'content/taking/monitoring.html'
        })
        .state('HELP', {
          url: '/how-BELEODAQ-may-help/right-for-you',
          templateUrl: 'content/help/help.html'
        })
        .state('RESULTS', {
          url: '/how-BELEODAQ-may-help/clinical-trial-results',
          templateUrl: 'content/help/results.html'
        })
        .state('SIDE-EFFECTS', {
          url: '/side-effects',
          templateUrl: 'content/side-effects/side-effects.html'
        })
        .state('SUPPORT', {
          url: '/support-and-resources/star',
          templateUrl: 'content/support/support.html'
        })
        .state('QUESTIONS', {
          url: '/support-and-resources/questions-for-your-doctor',
          templateUrl: 'content/support/questions.html'
        })
        .state('COPING', {
          url: '/support-and-resources/coping-with-treatment',
          templateUrl: 'content/support/coping.html'
        })
        .state('FAQS', {
          url: '/support-and-resources/faqs',
          templateUrl: 'content/support/faqs.html'
        })
        .state('TIPS', {
          url: '/support-and-resources/tips-for-caregivers',
          templateUrl: 'content/support/tips.html'
        })
        .state('CHECKLIST', {
          url: '/support-and-resources/pretreatment-checklist',
          templateUrl: 'content/support/checklist.html'
        })
        .state('RESOURCES', {
          url: '/support-and-resources/helpful-resources',
          templateUrl: 'content/support/resources.html'
        })
});

app.run(['$transitions', function ($transitions) {
  $transitions.onSuccess({}, function () {
      // Hide mobile menu
      document.querySelector('.mobile-links').classList.add('hidden')
      // Scroll to top
      const html = document.querySelector('html')
      html.style.scrollBehavior = 'auto';
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      html.style.scrollBehavior = '';
  })
}]);
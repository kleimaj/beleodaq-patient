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
            templateUrl: 'landing-page.html',
            resolve: {
              resetNav: function() {
                resetLinks();
              }
            }
        })
        .state('PTCL', {
            url: '/about/ptcl',
            templateUrl: 'content/about/ptcl.html',
            resolve: {
              resetNav: function() {
                activateLink(0);
              }
            }
        })
        .state('BELEODAQ', {
            url: '/about/beleodaq',
            templateUrl: 'content/about/beleodaq.html',
            resolve: {
              resetNav: function() {
                activateLink(0);
              }
            }
        })
        .state('WORKS', {
            url: '/about/how-it-works',
            templateUrl: 'content/about/works.html',
            resolve: {
              resetNav: function() {
                activateLink(0);
              }
            }
        })
        .state('DOSING', {
            url: '/taking-beleodaq/dosing-schedule',
            templateUrl: 'content/taking/dosing.html',
            resolve: {
              resetNav: function() {
                activateLink(1);
              }
            }
        })
        .state('EXPECT', {
          url: '/taking-beleodaq/what-to-expect',
          templateUrl: 'content/taking/expect.html',
          resolve: {
            resetNav: function() {
              activateLink(1);
            }
          }
        })
        .state('PREPARING', {
          url: '/taking-beleodaq/preparing-for-treatment',
          templateUrl: 'content/taking/preparing.html',
          resolve: {
            resetNav: function() {
              activateLink(1);
            }
          }
        })
        .state('MONITORING', {
          url: '/taking-beleodaq/monitoring-your-treatment',
          templateUrl: 'content/taking/monitoring.html',
          resolve: {
            resetNav: function() {
              activateLink(1);
            }
          }
        })
        .state('HELP', {
          url: '/how-BELEODAQ-may-help/right-for-you',
          templateUrl: 'content/help/help.html',
          resolve: {
            resetNav: function() {
              activateLink(2);
            }
          }
        })
        .state('RESULTS', {
          url: '/how-BELEODAQ-may-help/clinical-trial-results',
          templateUrl: 'content/help/results.html',
          resolve: {
            resetNav: function() {
              activateLink(2);
            }
          }
        })
        .state('SIDE-EFFECTS', {
          url: '/side-effects',
          templateUrl: 'content/side-effects/side-effects.html',
          resolve: {
            resetNav: function() {
              activateLink(3);
            }
          }
        })
        .state('SUPPORT', {
          url: '/support-and-resources/star',
          templateUrl: 'content/support/support.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('QUESTIONS', {
          url: '/support-and-resources/questions-for-your-doctor',
          templateUrl: 'content/support/questions.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('COPING', {
          url: '/support-and-resources/coping-with-treatment',
          templateUrl: 'content/support/coping.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('FAQS', {
          url: '/support-and-resources/faqs',
          templateUrl: 'content/support/faqs.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('TIPS', {
          url: '/support-and-resources/tips-for-caregivers',
          templateUrl: 'content/support/tips.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('CHECKLIST', {
          url: '/support-and-resources/pretreatment-checklist',
          templateUrl: 'content/support/checklist.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
        })
        .state('RESOURCES', {
          url: '/support-and-resources/helpful-resources',
          templateUrl: 'content/support/resources.html',
          resolve: {
            resetNav: function() {
              activateLink(4);
            }
          }
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
function activateLink(linkNumber) {
  resetLinks();
  Array.from(document.querySelector('.nav-links')
        .getElementsByTagName('li'))[linkNumber]
        .classList.add('active');
  Array.from(document.querySelector('.mobile-links')
        .getElementsByTagName('li'))[linkNumber]
        .classList.add('active');
}
function resetLinks() {
  Array.from(document
    .querySelector('.nav-links')
    .getElementsByTagName('li'))
    .forEach((link) => link.classList.remove('active'));
  Array.from(document
    .querySelector('.mobile-links')
    .getElementsByTagName('li'))
    .forEach((link) => link.classList.remove('active'));
}
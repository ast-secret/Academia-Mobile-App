// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'angularMoment'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.constant('DEFAULT_ROUTE', 'app.horarios-aulas')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })


    .state('dispatcher', {
        url: "/dispatcher",
        templateUrl: "templates/dispatcher.html",
        controller: 'DispatcherCtrl'
    })

    .state('app.aulas', {
        url: "/aulas",
        views: {
          'menuContent': {
            templateUrl: "templates/aulas.html",
            controller: 'AulasCtrl'
          }
        }
    })
    .state('app.horarios-aulas', {
        url: "/horarios-aulas",
        views: {
            'menuContent': {
                templateUrl: "templates/horarios_aulas.html",
                controller: 'HorariosAulasCtrl'
            }
        }
    })   

    .state('app.aula-detalhe', {
      url: "/aulas",
      views: {
        'menuContent': {
          templateUrl: "templates/aulas.html",
          controller: 'AulasCtrl'
        }
      }
    })

  .state('app.meu-treino', {
    url: "/meu-treino",
    views: {
      'menuContent': {
        templateUrl: "templates/meu-treino.html",
        controller: 'MeuTreinoCtrl'
      }
    }
  })
  .state('app.comunicados', {
    url: "/comunicados",
    views: {
      'menuContent': {
        templateUrl: "templates/comunicados.html",
        controller: 'ComunicadosCtrl'
      }
    }
  })
  .state('app.caixa-de-sugestoes', {
    url: "/caixa-de-sugestoes",
    views: {
      'menuContent': {
        templateUrl: "templates/caixa_de_sugestoes.html",
        controller: 'CaixaDeSugestoesCtrl'
      }
    }
  })
  .state('logout', {
    url: "/logout",
    templateUrl: "templates/logout.html",
    controller: 'LogoutCtrl'
  })
  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dispatcher');
});

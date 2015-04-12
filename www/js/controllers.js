angular.module('starter.controllers', [])

.controller('AppCtrl', function() {
})

.controller('DispatcherCtrl', function(
  $scope,
  $state,
  DEFAULT_ROUTE
){
    $state.go(DEFAULT_ROUTE);
})

.controller('HorariosAulasCtrl', function(
  $scope,
  $ionicModal,
  $ionicTabsDelegate,
  $timeout,
  Aulas
) {

    $scope.listStyle = 'byHorarios';
    $scope.query = {};

    $scope.$on('$ionicView.loaded', function () {
        $scope.query.weekday = moment().format('d');
        $timeout(function() {
            $ionicTabsDelegate.select(parseInt($scope.query.weekday));
        });
    });

    $scope.changeTab = function(index){
        console.log(index);
        $scope.query.weekday = index;
    };

  $scope.currentAula =  null;
  $scope.aulasWithHorarios = Aulas.getAulasWithHorarios();

  $scope.aulas = Aulas.getAulas();

  $scope.toggleListStyle = function(style){
    $scope.listStyle = style;
  };

  $ionicModal.fromTemplateUrl('templates/modals/aula-detalhe.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(current) {
    $scope.currentAula = current;
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


})

.controller('AulasCtrl', function(
  $scope,
  $ionicModal,
  Aulas
) {

    $scope.changeTab = function(index){
        console.log(index);
        $scope.query.weekday = index;
    };

  $scope.currentAula =  null;
  $scope.aulas = Aulas.getAulas();

  $ionicModal.fromTemplateUrl('templates/modals/aula-detalhe.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(current) {
    $scope.currentAula = current;
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
})

.controller('ComunicadosCtrl', function(
  $scope,
  $ionicModal,
  Comunicados
) {

  $scope.currentComunicado = null;
  $scope.comunicados = Comunicados.getAll();

  $ionicModal.fromTemplateUrl('templates/modals/comunicados-detalhe.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function(current) {
    $scope.currentComunicado = current;
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });


})

.controller('MeuTreinoCtrl', function(
  $scope,
  $ionicModal,
  MeuTreino
) {

  $scope.meuTreino = MeuTreino.getAll();

  $scope.query = {};
  $scope.query.name = '';

  $ionicModal.fromTemplateUrl('templates/modals/meu-treino-detalhe.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})

.controller('CaixaDeSugestoesCtrl', function(
  $scope
) {
})


.controller('LoginCtrl', function(
  $scope
) {
})

.controller('LogoutCtrl', function(
  $scope,
  $state
) {

  $state.go('login');

});

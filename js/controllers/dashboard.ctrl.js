angular.module('app.controllers.dashboard', [])

.controller('DashboardCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  function ($scope, $state, $stateParams) {
    console.log($stateParams.state);
    var finalState = $stateParams.state,
        stateChanging = true;
  }
])
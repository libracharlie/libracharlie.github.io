angular.module('app', [
  'app.router'
])

.controller('test', ['$scope', function ($scope) {
  $scope.active = 1;
}])

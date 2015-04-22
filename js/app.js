angular.module('app', [
  'app.router',
  'app.controllers.dashboard'
])

.run(['$rootScope', function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function (event, toState) {
    function getTitle() {
      switch (toState.name) {
        case 'dashboard.me':
          return '我';
        case 'dashboard.me.purse':
          return '我的钱包';
        case 'dashboard.me.card':
          return '银行卡';
        case 'dashboard.me.borrow':
          return '我的借款';
        case 'dashboard.me.lend':
          return '我的出借';
        case 'dashboard.me.message':
          return '消息';
        case 'dashboard.me.settings':
          return '账户设置';
        default:
          return null;
      }  
    }

    document.title = getTitle() || document.title;
  });
}])

.controller('test', ['$scope', function ($scope) {
  $scope.active = 1;
}])

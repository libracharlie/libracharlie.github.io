angular.module('app.router', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard/0/me');

  $stateProvider
  .state('dashboard', {
    url: '/dashboard/{state}',
    templateUrl: 'templates/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('dashboard.me', {
    url: '/me',
    views: {
      'main': {
        templateUrl: 'templates/dashboard.me.html'
      }
    }
  })
  .state('dashboard.me.purse', {
    url: '/purse',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.html'
      }
    }
  })
  .state('dashboard.me.purse.deposit', {
    url: '/deposit',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.deposit.html'
      }
    }
  })
  .state('dashboard.me.purse.withdraw', {
    url: '/withdraw',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.withdraw.html'
      }
    }
  })
  .state('dashboard.me.purse.spec', {
    url: '/spec',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.spec.html'
      }
    }
  })
  .state('dashboard.me.card', {
    url: '/card',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.card.html'
      }
    }
  })
  .state('dashboard.me.card.step1', {
    url: '/step1',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.card.step1.html'
      }
    }
  })
  .state('dashboard.me.card.step2', {
    url: '/step2',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.card.step2.html'
      }
    }
  })
  .state('dashboard.me.myBorrow', {
    url: '/myBorrow',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.myBorrow.html'
      }
    }
  })
  .state('dashboard.me.myLend', {
    url: '/myLend',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.myLend.html'
      }
    }
  })
  .state('dashboard.me.message', {
    url: '/message',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.message.html'
      }
    }
  })
  .state('dashboard.me.settings', {
    url: '/settings',
    views: {
      'main@dashboard': {
        templateUrl: 'templates/dashboard.me.settings.html'
      }
    }
  })
}])
angular.module('app.router', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard/me');

  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html'
  })
  .state('dashboard.me', {
    url: '/me',
    views: {
      'me': {
        templateUrl: 'templates/dashboard.me.html'
      }
    }
  })
  .state('dashboard.me.purse', {
    url: '/purse',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.html'
      }
    }
  })
  .state('dashboard.me.purse.deposit', {
    url: '/deposit',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.deposit.html'
      }
    }
  })
  .state('dashboard.me.purse.withdraw', {
    url: '/withdraw',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.withdraw.html'
      }
    }
  })
  .state('dashboard.me.purse.spec', {
    url: '/spec',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.purse.spec.html'
      }
    }
  })
  .state('dashboard.me.card', {
    url: '/card',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.card.html'
      }
    }
  })
  .state('dashboard.me.card.step1', {
    url: '/step1',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.card.step1.html'
      }
    }
  })
  .state('dashboard.me.card.step2', {
    url: '/step2',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.card.step2.html'
      }
    }
  })
  .state('dashboard.me.borrow', {
    url: '/borrow',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.borrow.html'
      }
    }
  })
  .state('dashboard.me.lend', {
    url: '/lend',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.lend.html'
      }
    }
  })
  .state('dashboard.me.message', {
    url: '/message',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.message.html'
      }
    }
  })
  .state('dashboard.me.settings', {
    url: '/settings',
    views: {
      'me@dashboard': {
        templateUrl: 'templates/dashboard.me.settings.html'
      }
    }
  })
}])
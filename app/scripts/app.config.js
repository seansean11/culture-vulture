'use strict';

angular.module('tokenAuthApp').config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider, API_URL) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    });

    $authProvider.loginUrl = API_URL + 'auth/login';
    $authProvider.signupUrl = API_URL + 'auth/register';

    $authProvider.withCredentials = false;

    $authProvider.google({
      clientId: '647382757431-av69995n8slsuo5ho081ucrqisd9qqr3.apps.googleusercontent.com',
      url: API_URL + 'auth/google'
    });

    $authProvider.facebook({
      clientId: '781662918576825',
      url: API_URL + 'auth/facebook'
    });

    $httpProvider.interceptors.push('authInterceptor');
});
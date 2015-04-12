'use strict';

/**
 * @ngdoc overview
 * @name cultureVultureApp
 * @description
 * # cultureVultureApp
 *
 * Main module of the application.
 */
angular
  .module('cultureVultureApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('search', {
        url: '/search?q',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      })
      .state('event', {
        url: '/event/:id',
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        resolve: {
          singleEvent: function($stateParams, Event) {
            return Event.get($stateParams.id);
          }
        }
      });
  });

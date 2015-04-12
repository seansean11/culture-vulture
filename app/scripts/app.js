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
    // 'angular-loading-bar',
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
        url: '/search?q?size',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
      })
      .state('event', {
        url: '/event/:id',
        templateUrl: 'views/event.html',
        controller: 'EventCtrl',
        resolve: {
          singleEvent: function($stateParams, Event, $http) {
            var query = '_id:' + $stateParams.id;
            
            return $http({ 
              url: 'http://culture-vulture.rocks/es/events/_search', 
              method: 'GET', 
              params: { q: query }
            });
          }
        }
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('SearchCtrl', function ($scope, $http, $stateParams) {

    // GET all events
    $http({ 
      method: 'GET', 
      params: $stateParams, 
      url: 'http://culture-vulture.rocks/es/events/_search' 
    }).success(function(data) {
        $scope.events = data.hits.hits;
        console.log($scope.events);
    }).error(function(error) {
        console.log(error);
    });

    $scope.categories = [
      {
        name: 'Music',
        cat: 'music'
      },
      {
        name: 'Arts',
        cat: 'arts'
      },
      {
        name: 'Community',
        cat: 'community'
      },
      {
        name: 'Sights',
        cat: 'sights'
      },
    ];

    $scope.currentFilter = '';

    $scope.filterToggle = function(filter) {
      var query = '';
      
      if($scope.currentFilter !== filter) {
        query = '_type:' + filter;
      }

      $http({ 
        url: 'http://culture-vulture.rocks/es/events/_search', 
        method: 'GET', 
        params: { q: query }
      }).success(function(data) {
        $scope.events = data.hits.hits;
      });
    };
  });

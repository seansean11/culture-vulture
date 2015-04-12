'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('SearchCtrl', function ($scope) {

    var mockData = [
      {
        id: 1234556,
        title: 'Tonight We Rise',
        cat: 'music',
        date: new Date('April 13, 2015 09:00:00'),
        venue: 'Gothic Theatre',
        address: '12345 W Colorado Street',
        geo: {
          lat: 39.659363,
          long: -104.988785
        },
        img: 'http://userserve-ak.last.fm/serve/_/15575343/Gothic+Theatre+httpwwwgothictheatrecom.jpg',
        url: 'http://www.gothictheatre.com/'
      },
      {
        id: 1234557,
        title: 'Tonight We Rise',
        cat: 'arts',
        date: new Date('April 13, 2015 09:00:00'),
        venue: 'Gothic Theatre',
        address: '12345 W Colorado Street',
        geo: {
          lat: 39.659363,
          long: -104.988785
        },
        img: 'http://userserve-ak.last.fm/serve/_/15575343/Gothic+Theatre+httpwwwgothictheatrecom.jpg',
        url: 'http://www.gothictheatre.com/'
      }
    ];

    // GET all events
    // var events = $scope.events = Event.query();
    $scope.events = mockData;

    $scope.categories = [
      {
        name: 'Music',
        cat: 'music'
      },
      {
        name: 'Events',
        cat: 'events'
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

    $scope.filterArr = [];

    $scope.filterToggle = function(filter) {
      var exists = $scope.filterArr.indexOf(filter);

      if(exists > -1) {
        $scope.filterArr.splice(exists, 1);
      } else {
        $scope.filterArr.push(filter);
      }
    };
  });

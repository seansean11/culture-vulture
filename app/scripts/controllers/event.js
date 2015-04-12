'use strict';

/**
 * @ngdoc function
 * @name cultureVultureApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the cultureVultureApp
 */
angular.module('cultureVultureApp')
  .controller('EventCtrl', function ($scope, singleEvent) {
    // $scope.event = singleEvent;
    $scope.event = {
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
    };
  });

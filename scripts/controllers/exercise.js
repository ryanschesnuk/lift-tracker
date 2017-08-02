'use strict';

angular.module("liftTrackerApp")
.controller('exerciseCtrl', function($scope) {
  $scope.exercises = [
    {"name": "Exercise Name"}
  ];

  $scope.exercise = [
    {"type": "Weights"}
  ]
});

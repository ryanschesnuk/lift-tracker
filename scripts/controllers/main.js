'use strict';

angular.module("liftTrackerApp")
.controller('mainCtrl', function($scope) {
  $scope.days = [
    {"name": "Monday"},
    {"name": "Tuesday"},
    {"name": "Wednesday"},
    {"name": "Thursday"},
    {"name": "Friday"},
    {"name": "Saturday"},
    {"name": "Sunday"}
  ];
});

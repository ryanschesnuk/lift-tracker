'use strict';

angular.module("liftTrackerApp")
.controller('mainCtrl', function($scope) {

  // Define day names in schedule using ng-repeat
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

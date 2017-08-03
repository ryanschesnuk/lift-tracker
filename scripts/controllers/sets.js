'use strict';

angular.module("liftTrackerApp")
.controller('setCtrl', function($scope){

  $scope.addSet = function (){
    let newSet = {"reps": 5, "weight": 135};
    $scope.sets.push(newSet);
  };

  $scope.deleteSet = function(set, $index) {
    $scope.sets.splice($index, 1);
  };

  $scope.sets = [
    {"reps": 5, "weight": 135},
    {"reps": 5, "weight": 135},
    {"reps": 5, "weight": 135},
  ];

});

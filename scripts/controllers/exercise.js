'use strict';

angular.module("liftTrackerApp")
.controller('exerciseCtrl', function($scope) {

  $scope.addExercise = function (){
    let newExercise = {"name": "Exercise Name"};
    $scope.exercises.push(newExercise);
  };

  $scope.deleteExercise = function(exercise, $index) {
    $scope.exercises.splice($index, 1);
  };

  // Pre-populate each day with one exercise upon page load
  $scope.exercises = [
    {"name": "Exercise Name"},
  ];

});

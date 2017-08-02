'use strict';

angular.module("liftTrackerApp")
.controller('exerciseCtrl', function($scope) {

  $scope.addExercise = function (){
    let newExercise = {"name": "Exercise Name"};
    $scope.exercises.push(newExercise);
  };
  $scope.exercises = [
    {"name": "Exercise Name"},
  ];

  $scope.exercise = [
    {"type": "Weights"}
  ]
});

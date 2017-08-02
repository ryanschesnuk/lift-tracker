'use strict';

angular.module("liftTrackerApp")
.controller('setCtrl', function($scope){
    $scope.sets = [
      {"reps": 5, "weight": 135},
      {"reps": 5, "weight": 135},
      {"reps": 5, "weight": 135},
    ];

});

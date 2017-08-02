angular.module("liftTrackerApp")
.directive('day', function() {
  return {
    templateUrl: 'templates/day.html',
    controller: "exerciseCtrl",
    replace: true
  };
});

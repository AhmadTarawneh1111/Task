
angular.module('task')
  .controller('CourseCtrl', function($scope, $stateParams) {
    $scope.title = $stateParams.id;
    $scope.score = 0;
    // $scope.submitAnswer = function() {
    //   if($scope.q1 == 10) {
    //     $scope.score += 5;
    //   }
    //   if($scope.q2 == 2) {
    //     $scope.score += 5;
    //   }
    // }
  });

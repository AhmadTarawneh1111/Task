
angular.module('task')
  .controller('ReportsCtrl', function($scope, $location) {

  $scope.records = [
    {
      "title": "Mathematics",
      "score": 100
    },
    {
      "title": "Physics",
      "score": 50
    },
    {
      "title": "Sports",
      "score": 75
    }
  ]

  });

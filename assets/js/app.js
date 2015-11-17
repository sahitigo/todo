var todoApp = angular.module('todoApp',[]);

//CONTROLLER
todoApp.controller("todoCtrl",["$scope","$http",function($scope,$http){
    $http.get('todo.json').success(function(data){
    $scope.todos = data;
    console.log(data);
  });
  }]);
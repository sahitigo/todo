var todoApp = angular.module('todoApp',[]);

//CONTROLLER
todoApp.controller("todoCtrl",["$scope","$http",function($scope,$http){
    $http.get('todo.json').success(function(data){
    $scope.todos = data;
    console.log(data);
  });
    $scope.addtodo = function(){
      var newtodo={
        done:false,
        text:$scope.todoText
      };
      $scope.todos.push(newtodo);
      $scope.todoText="";
    };

    $scope.removetodo = function(start){
      $scope.todos.splice(start,1);
    };
  }]);
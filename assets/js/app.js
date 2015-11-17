var todoApp = angular.module('todoApp',[]);

//CONTROLLER
todoApp.controller("todoCtrl",["$scope","$http",function($scope,$http){
    $http.get('todo.json').success(function(data){
    $scope.todos = data;
    console.log(data);
  });
    //Function for adding a task
    $scope.addtodo = function(){
      var newtodo={
        done:false,
        text:$scope.todoText
      };
      $scope.todos.push(newtodo);
      $scope.todoText="";
    };
    //Function for removing a task
    $scope.removetodo = function(start){
      $scope.todos.splice(start,1);
    };

    //Function for moving a task
    $scope.move = function(index,direction){
      if(direction == 'up'){
        if(index == 0){
          return;
        }
        index = index-1 ;
      }
      if(direction == 'down'){
       if(index == $scope.todos.length-1)
          return;
    }
      var todo = $scope.todos[index];
      $scope.todos.splice(index + 2,0,todo);
      $scope.todos.splice(index,1);
    };
  }]);
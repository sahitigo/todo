var todoApp = angular.module('todoApp',['firebase']);

//CONTROLLER
todoApp.controller("todoCtrl",["$scope","$firebaseArray",function($scope,$firebaseArray){
  var ref = new Firebase('https://brilliant-fire-221.firebaseio.com/');
 $scope.todos = $firebaseArray(ref);
    //Function for adding a task
    $scope.addtodo = function(){
      var newtodo={
        done:false,
        text:$scope.todoText
      };
      $scope.todos.$add(newtodo);
      $scope.todoText="";
    };
    //Function for removing a task
    $scope.removetodo = function(todo){
      $scope.todos.$remove(todo);
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